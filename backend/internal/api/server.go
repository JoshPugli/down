package api

import (
	"net/http"
)

// constructor is responsible for all the top-level HTTP stuff that applies to all endpoints, 
// like CORS, auth middleware, and logging
func NewServer() *http.ServeMux {
	// Mux is short for "multiplexer", 
	// which is a type of HTTP handler that matches incoming requests to their 
	// corresponding handlers based on the request's URL path.
	// It allows you to define multiple routes and associate them with specific handler functions.
	mux := http.NewServeMux()
	
	addRoutes(mux)

	return mux
}