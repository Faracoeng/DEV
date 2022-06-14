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


O conteúdo de cada  **Dockerfile** peguei do [site oficial](https://hub.docker.com), la tem um modelo padrão.