## Boa práticas em microsserviços

Em microservices, é sempre bom manter a regra de negócio definida na entidade e não fazer com um model de banco de dados por exemplo.

Neste microsserviço, em `internal/entities/category.go`, existe a **struct** que representa uma "Categoria", e para construir uma Categoria, é necessário utilizar uma própria função de `category.go` chamada `func NewCategory(name string) *Category`, e nela, definir as regras de negócio, para validar a estrutura criada.


### Internal

Deve armazenar scripts que são utilizados apenas pelo microsserviço, que nao são compartilhados com outros serviços, esses compartilhados deveriam estar em um pacote chamado `pkg`.

**Entities:** Local onde são criadas as estuturas de dados utilizadas pelo microsserviço.

**Services:** Local onde são implementadas as regras de negócio do microsserviço.