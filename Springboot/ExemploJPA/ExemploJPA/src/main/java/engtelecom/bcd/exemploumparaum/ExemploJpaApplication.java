package engtelecom.bcd.exemploumparaum;

import engtelecom.bcd.exemploumparaum.entities.Endereco;
import engtelecom.bcd.exemploumparaum.entities.Pessoa;
import engtelecom.bcd.exemploumparaum.repositories.EnderecoRepository;
import engtelecom.bcd.exemploumparaum.repositories.PessoaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Optional;

@SpringBootApplication
public class ExemploJpaApplication {

	public static void main(String[] args) {
		// Essa linha chama o @Beam
		// Tudo dentro de commandLinerRunner é o main
		SpringApplication.run(ExemploJpaApplication.class, args);

	}
	@Bean
	// Tem que passar todas as entidades como parametro
	public CommandLineRunner exemploInicial(PessoaRepository pessoaRepository, EnderecoRepository enderecoRepository){
		return (args) -> {
			// Cria obj
			//Pessoa p = new Pessoa("1298217879","luiza@dominio.com","luiza");
			// Salva no banco
			//pessoaRepository.save(p);
			//Endereco end = new Endereco("88125747","SJ", "SC", "Rua01",p);
			//enderecoRepository.save(end);

			// SELECT * FROM PESSOA
			for(Pessoa i: pessoaRepository.findAll()){
				System.out.println(i);
			}

			for(Endereco i: enderecoRepository.findAll()){
				System.out.println(i);
			}

			Optional<Pessoa> p = pessoaRepository.findById(1);

			if(p.isPresent()){
				Pessoa a = p.get();
				System.out.println(a);
			}

		};
	}
}
