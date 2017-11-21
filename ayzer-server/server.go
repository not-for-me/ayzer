package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {

	data := struct {
		Message string
	}{
		"Hello, World",
	}

	if err := json.NewEncoder(w).Encode(data); err != nil {
		log.Println(err)
	}
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("../dist/ayzer-web/")))

	http.HandleFunc("/api/hello", helloWorld)
	http.ListenAndServe(":8080", nil)
}
