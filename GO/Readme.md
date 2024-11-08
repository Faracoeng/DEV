## Boa práticas em microsserviços

Em microservices, é sempre bom manter a regra de negócio definida na entidade e não fazer com um model de banco de dados por exemplo.

Neste microsserviço, em `internal/entities/category.go`, existe a **struct** que representa uma "Categoria", e para construir uma Categoria, é necessário utilizar uma própria função de `category.go` chamada `func NewCategory(name string) *Category`, e nela, definir as regras de negócio, para validar a estrutura criada.