package engtelecom.bcd.exemploumparaum.repositories;

import engtelecom.bcd.exemploumparaum.entities.Pessoa;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface PessoaRepository extends CrudRepository<Pessoa, Integer> {
    //Metodo criado
    public Optional<Pessoa> findByCPF(String cpf);

    public Optional<Pessoa> findByCpfAndNome(String cpf, String nome);
}
