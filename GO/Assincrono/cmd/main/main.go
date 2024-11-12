package main

import (
	"time"
	"fmt"
)

func printaString(n string) {
	for i := 0; i < 3; i++ {
		fmt.Println(n)
		time.Sleep(time.Second)
	}
}


func main() {

	// Ou dispara a goroutine antes de chamar a função printaNumero pelo main
	// Que serão executadas em paralelo
	go printaString("GOROUTINE")
	
	// Outra forma de chamar a função printaNumero
	pn := printaString
	go pn("ALIAS")
	
	// Usando uma função anonima dentro de uma go routine
	go func(){
		printaString("ANONIMA-Routine")
	}()
	
	// Usando uma função anonima
	func(){
		printaString("ANONIMA")
	}()
	
	printaString("Main")

	

	//go printaNumero(3)
    // O programa termina antes que a goroutine tenha a chance de imprimir 
	// os números se o tempo de execução for menor que o tempo de espera da goroutine.
	//time.Sleep(3 * time.Second)

}