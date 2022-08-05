## Projeto introdutório de Django

**Importante destacar que existe o Django, feito para construção de aplicações WEB, e o Django REST, que é um conjunto de ferramentas para a construção de APIs, ambos são escritos em python**

### Criado pasta do projeto:

> mkdir try-django

### Criado ambiente virtual dentro do diretório *try-django*:

> python3 -m venv .

### Para habilitar o ambiente virtual, basta digitar dentro do diretório *penv*:

> source bin/activate

O `source` é um comando interno de shell usado para executar o conteúdo do arquivo **activate** localizado dentro do diretório `bin` 


### Para desativar:

> deactivate


### Instalando **Django**


Para instalar o django, utilizar:

> `pip install "Django>=3.2,<3.3"` 

Este comando através do **pip** vai intalar a versão mais recente 3.2, sendo sempre inferior a 3.3.

[Repositório de referência](https://www.djangoproject.com/download/)


### Validar instalações com:

> pip freeze

Lembrando que todas as execuções devem ser feitas dentro do ambiente virtual *try-django*

### Para iniciar o projeto:

> python -m django startproject trydjango .

O nome escolhido **trydjango**, é onde ficam as configurações do projeto criado.

### Servidor de desenvolvimento:

> python manage.py runserver


### Para as páginas, devem ser criadas Views

Criar um arquivo `views.py`, dentro do diretório de configuração criado **trydjango**, que deverá ser responsável por renderizar as paginas HTML 


### Para criar componaente do blog do site

> python manage.py startapp blog





