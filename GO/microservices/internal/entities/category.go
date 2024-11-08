package entities

import (
	"time"
	"errors"
	"fmt"
)
// Em microservices, é sempre bom manter a regra de negócio definida na entidade
// e não fazer com um model de banco de dados por exemplo.

type Category struct {
	ID   uint    `json:"id"`
	Name string `json:"name"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// Recebe name como paametro, e retorna um ponteiro para Category e um erro
func NewCategory(name string) (*Category, error) {
	if name == "" {
		return nil, errors.New("name is required")
	}
	// Retorna um ponteiro para Category com os campos preenchidos
	category := &Category{
		Name: name,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}
	// Regras de negocio aplicadas aqui
	err := category.IsValid()
	if err != nil {
		return nil, err
	}
	return category, nil

}
// Metodo de regra de negócio para definir se a categoria criada é valida
func (c *Category) IsValid () error{
	if (len(c.Name) < 5){
		return fmt.Errorf("nome deve ter mais de 5 caracteres: %d", len(c.Name))
	}
	return nil
}