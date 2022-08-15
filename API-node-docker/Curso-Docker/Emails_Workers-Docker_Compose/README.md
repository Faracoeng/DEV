## Projeto para Envio de Emails com Workers


Para iniciar sistema com docker compose:

> `docker-compose up -d`

verificar quais serviços definidos no arquivo docker compose estão rodando:

> `docker-compose ps`

executar um comando dentro de um serviço:

> `docker-compose exec` *nome do serviço* **"Comando que deseja executar naquele serviço"**

**Exemplo para listar bases de dados do postgree**

> `docker-compose exec db psql -U postgres -c '\l'`


Derrubar docker:

> `docker-compose down`