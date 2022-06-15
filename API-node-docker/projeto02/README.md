# Dinâmica


> Criei um **Dockerfile**, que é uma imagem, em cada aplicação que será conteinerizada, e para cada, utilizei os comandos abaixo para buildar elas:

```
docker build -t mysql-image -f api/db/Dockerfile .
```
```
docker build -t node-image -f api/Dockerfile .
```
```
docker build -t php-image -f website/Dockerfile .
```

### Explicando *docker build*:

>-  parametro -t <nomeImagem>   (Para dar nome a imagem)

 Com o comando `docker image ls`, podemos ver as imagens que estão rodando, identificadas pelo nome escolhido no parametro -t

>-  parametro -f <path> <contexto> (caminho do Dockerfile para gerar a imagem)

**(Em relação ao *contexto* geralmente vai na raiz do projeto e executa o comando com (.) assim foi o processo com os comando acima)**

O conteúdo de cada  **Dockerfile** peguei do [site oficial](https://hub.docker.com), la tem um modelo padrão.

### Containers

Após as imagens serem construidas, é necessaŕio rodar o conteiner em que cada imagem vai ser configurada.

```
docker run -d -v $(pwd)/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image
```
```
docker run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image
```
```
docker run -d -v "$(pwd)/website":/var/www/html -p 8888:80 --link node-container --rm --name php-container php-image
```

### Explicando *docker run*:

Basicamente o comando é:

- `docker run --name <nomeDoContainer> <nomeDaImagem>`

>-  parametro -d    (Para executar em segundo plano, como se fosse o (&))

Para rodar o banco:

```
docker exec -i mysql-container mysql -uroot -pprogramadorabordo < api/db/script.sql
```

Comando acima esta associado a executar alguma interação com o container, basta adiconar o parametro (-i) e dizer em qual container desejar executar o comando/bash, depois so inserir o comando, logo:

`docker exec -i <nomeContainer> <comando>` 


### API Node

Instalar dependencia do Node:

> `npm init`

Instalar Nodemon para dar reload sempre que arquivos.js foram atualizados:

> `npm install --save-dev nodemon`

Instalar Express para rotas e drivers do banco:

> `npm install --save express mysql`


