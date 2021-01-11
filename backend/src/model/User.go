package model

import (
	"time"
)

type User struct {
	Name      string    `json:"name,omitempty"`
	Email     string    `json:"email,omitempty"`
	Password  string    `json:"password,omitempty"`
	Grade     string    `json:"grade,omitempty"`
	CreatedAt time.Time `bson:"created_at"`
	UpdatedAt time.Time `bson:"updated_at"`
}

