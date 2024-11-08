package main

import (
	"fmt"
	"net/http"
	"time"
)


//Este código em Go cria um monitoramento simples de disponibilidade para uma lista de URLs,
// usando goroutines (threads leves) e canais para comunicação entre elas. 
func main() {
	// cria uma lista de links
	links := []string{
		"http://google.com",
		"http://facebook.com",
		"http://stackoverflow.com",
		"http://golang.org",
		"http://amazon.com",
	}

	// Um canal c é criado para transmitir mensagens entre goroutines.
	// Ele permite comunicação assíncrona entre as funções de verificação e o fluxo principal do programa.
	// Em vez de verificar cada link sequencialmente, o programa utiliza goroutines para realizar a verificação de maneira assíncrona.
	// Cada goroutine recebe uma URL e usa a função checkLink para verificar se o link está acessível.
	// O canal c tem uma string como parmetro para transmitir strings entre goroutines

	// a função make é usada para inicializar canais, slices e mapas.
	// Aqui, make(chan string) cria um canal que pode transmitir valores do tipo string.
	// Quando criamos um canal com make, ele fica pronto para enviar e receber dados desse tipo.
	c := make(chan string) 

	// Aqui é feita a verificação paralela de cada link.
	// Cada um na lista é passado para uma nova goroutine que executa checkLink. 
	// A palavra-chave go permite que checkLink seja chamada de forma assíncrona, sem bloquear a execução principal.

	for _, url := range links {
		go checkLink(url, c)
	}
	// Recebendo Respostas do Canal em um Loop Infinito
	//Este loop recebe as respostas do canal c (onde cada link é enviado após a verificação) e as atribui à variável l.
	// O loop for l := range c continua enquanto houver mensagens enviadas para o canal. Em cada iteração:
    // A função anônima go func(link string) {...}(l) cria uma nova goroutine que aguarda 2 segundos e chama checkLink novamente para revalidar o link.
    
	time.Sleep(2 * time.Second) //introduz um atraso antes da próxima verificação, para evitar excesso de requisições.
	
	for l := range c {


		go func(link string) {
			time.Sleep(2 * time.Second)
			checkLink(link, c)
		}(l)
	}
	
}

//A função checkLink envia uma requisição HTTP GET para o link fornecido:

//Se houver erro na resposta, imprime que o link “pode estar fora do ar” e envia o link de volta pelo canal channel para ser reprocessado.
//Se não houver erro, imprime que o link está ativo e também o envia de volta pelo canal para ser reprocessado após o atraso de 2 segundos.

func checkLink(link string, channel chan string) {

	_, err := http.Get(link)
	
	if err != nil {
		fmt.Println(link, "might be down")

		channel <- link
		return
	}

	fmt.Println(link, "is up!")

	channel <- link

}