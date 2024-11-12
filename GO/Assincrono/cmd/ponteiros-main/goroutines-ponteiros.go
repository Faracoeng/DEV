package main
import (
	"fmt"
	"time"

)


func funPonteiros(valor *string) {

	for {
		fmt.Println("Valor da variavel que o endereço aponta:", *valor)
		fmt.Println("Valor do endereço da variavel valor:", &valor)
		time.Sleep(1 * time.Second)
	}
}


func main(){
	var teste string = "Teste 1"
	// Esse ponteiro é uma variável que armazena o endereço de memória de uma variável
	var ponteiroTeste *string = &teste

	// Vou disparar uma Goroutine que recebe um ponteiro que aponta para uma variavel do tipo string
	go funPonteiros(ponteiroTeste)

	time.Sleep(3 * time.Second)

	// Vou alterar o valor a variavel via ponteiro
	*ponteiroTeste = "Teste 2"
	time.Sleep(3 * time.Second)

}