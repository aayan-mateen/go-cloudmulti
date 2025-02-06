package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/", HomeHandler)
	r.HandleFunc("/sites", SitesHandler)
	r.HandleFunc("/virtual-machines", VirtualMachinesHandler)

	http.Handle("/", r)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf("Starting server on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Welcome to go-cloudmulti!")
}

func SitesHandler(w http.ResponseWriter, r *http.Request) {
	// Handle static website operations
}

func VirtualMachinesHandler(w http.ResponseWriter, r *http.Request) {
	// Handle virtual machine operations
}

func provisionAWSResources(ctx *pulumi.Context) error {
	// Use Pulumi to provision and manage AWS resources
	return nil
}
