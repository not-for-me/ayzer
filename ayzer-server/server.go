package main

// TODO unit test
import (
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"strconv"
	"syscall"
)

const webRootPath = "/ayzer-web"
const portNum = 5700

func main() {

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		shutdown()
		os.Exit(1)
	}()

	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		log.Fatal(err)
	}

	fs := http.FileServer(http.Dir(dir + webRootPath))

	http.Handle("/", fs)
	http.HandleFunc("/_setting/ping", ping)

	localIP := getLocalIP()
	log.Println("Listening to " + localIP + ":" + strconv.Itoa(portNum))
	http.ListenAndServe(":"+strconv.Itoa(portNum), nil)
}

func getLocalIP() string {
	addrs, err := net.InterfaceAddrs()
	if err != nil {
		log.Fatal("Oops: " + err.Error() + "\n")
		os.Exit(1)
	}

	for _, a := range addrs {
		if ipnet, ok := a.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
			if ipnet.IP.To4() != nil {
				return ipnet.IP.String()
			}
		}
	}

	return "localhost"
}

func ping(w http.ResponseWriter, r *http.Request) {
	log.Println(r)
	data := struct {
		result string
	}{
		"pong",
	}

	if err := json.NewEncoder(w).Encode(data); err != nil {
		log.Println(err)
	}
}

func shutdown() {
	fmt.Println()
	log.Println("Shut down...")

	// clean up

	fmt.Println("Good bye...")
}
