package usercontroller

import (
	"context"
	"fmt"
	"log"
	"time"

	model "github.com/Enzo-Amorim/10espero-backend/src/model"
	db "github.com/Enzo-Amorim/10espero-backend/src/service"
	encryptdecrypt "github.com/Enzo-Amorim/10espero-backend/src/utils"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

var ctx = context.TODO()

//Here you put your encrypt key
var key = "9a8641538c22128ed374ea6af4bfdccf8230bbb635c754a5e3de0bdee0eff891"

//Register the users
func Register(c *gin.Context) {
	conn := db.GetConnection()
	Name := c.PostForm("Name")
	Email := c.PostForm("Email")
	Password := c.PostForm("Password")
	Grade := c.PostForm("Grade")

	collection := conn.Database("10espero").Collection("users")

	filter := bson.D{{"email", Email}}

	err := collection.FindOne(ctx, filter).Err()
	if err != nil {
		c.JSON(401, gin.H{
			"UserExist": true,
		})
	} else {

		if Name == "" || Email == "" || Password == "" || Grade == "" {
			c.JSON(400, gin.H{
				"error": "You sent the wrong data",
			})
		} else {

			encryptedPassword := encryptdecrypt.Encrypt(Password, key)

			user := model.User{
				Name:      Name,
				Email:     Email,
				Password:  encryptedPassword,
				Grade:     Grade,
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
			}

			insertResult, err := collection.InsertOne(ctx, user)

			if err != nil {
				log.Fatal(err)
			}

			fmt.Println("Inserted post with ID:", insertResult.InsertedID)
			user.Password = Password
			c.JSON(200, gin.H{
				"httpCode": 200,
				"Usuario":  user,
			})
		}
	}

}

//Login Send info to connect in account
func Login(c *gin.Context) {
	conn := db.GetConnection()

	Email := c.PostForm("Email")
	Password := c.PostForm("Password")

	collection := conn.Database("10espero").Collection("users")

	encryptedPassword := encryptdecrypt.Encrypt(Password, key)

	filter := bson.D{{"email", Email}, {"password", encryptedPassword}}

	var user bson.M

	err := collection.FindOne(ctx, filter).Decode(&user)
	if err != nil {
		c.JSON(404, gin.H{
			"UserFound": false,
		})
	} else {
		c.JSON(200, gin.H{
			"user": user,
		})
	}

}
