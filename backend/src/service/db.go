package db

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetConnection() *mongo.Client {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(
		"mongodb+srv://admin:1401@cluster0.6u86t.mongodb.net/10espero?retryWrites=true&w=majority",
	))
	if err != nil {
		log.Fatal(err)
	} else {
		return client
	}
	return client
}
