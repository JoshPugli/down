package main

import (
	"fmt"
	"github.com/JoshPugli/slime-social/internal/api"
	"net/http"
)

func main() {
	srv := api.NewServer()
	server := http.Server{
		Addr:    ":8000",
		Handler: srv,
	}
	fmt.Println("Server listening on port :8000")
	server.ListenAndServe()
}
