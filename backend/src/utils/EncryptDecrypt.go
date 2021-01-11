package encryptdecrypt

import (
	"crypto/aes"
	"crypto/cipher"
	"encoding/hex"
	"fmt"
)

//Encrypt is to protect the password in case of someone hack the database
func Encrypt(stringToEncrypt string, keyString string) (encryptedString string) {

	key, _ := hex.DecodeString(keyString)
	plaintext := []byte(stringToEncrypt)

	block, err := aes.NewCipher(key)
	if err != nil {
		panic(err.Error())
	}

	aesGCM, err := cipher.NewGCM(block)
	if err != nil {
		panic(err.Error())
	}

	nonce := make([]byte, aesGCM.NonceSize())

	ciphertext := aesGCM.Seal(nonce, nonce, plaintext, nil)

	return fmt.Sprintf("%x", ciphertext)
}

//Decrypt is to use the password humanly understandable
func Decrypt(encryptedString string, keyString string) (decryptedString string) {

	key, _ := hex.DecodeString(keyString)
	enc, _ := hex.DecodeString(encryptedString)

	block, err := aes.NewCipher(key)
	if err != nil {
		panic(err.Error())
	}

	aesGCM, err := cipher.NewGCM(block)
	if err != nil {
		panic(err.Error())
	}

	nonceSize := aesGCM.NonceSize()

	nonce, ciphertext := enc[:nonceSize], enc[nonceSize:]

	plaintext, err := aesGCM.Open(nil, nonce, ciphertext, nil)
	if err != nil {
		panic(err.Error())
	}

	return fmt.Sprintf("%s", plaintext)
}
