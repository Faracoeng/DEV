package services

import (
	"log"

	"github.com/Faracoeng/DEV/tree/master/GO/microservices/internal/entities"
)

type createCategoryService struct {

}

func NewCreateCategoryService() *createCategoryService {
	return &createCategoryService{}
}

func (s *createCategoryService) Execute(name string) error {
	// Aqui entra a lógica de criação
	category, err := entities.NewCategory(name)	

	if err != nil {
		return err
	}
	// Aqui cabe a logica de persistir o dado no database
	log.Println(category)
	return nil
}