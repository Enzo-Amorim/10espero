package main

import (
	usercontroller "github.com/Enzo-Amorim/10espero-backend/src/controller"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	userHandle := r.Group("/user")
	{
		userHandle.POST("/register", usercontroller.Register)
		userHandle.GET("/login", usercontroller.Login)
	}

	r.Run()

}
