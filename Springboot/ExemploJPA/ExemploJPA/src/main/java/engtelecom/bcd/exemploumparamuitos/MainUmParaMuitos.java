package engtelecom.bcd.exemploumparamuitos;

import engtelecom.bcd.exemploumparamuitos.entities.Campus;
import engtelecom.bcd.exemploumparamuitos.entities.Curso;
import engtelecom.bcd.exemploumparamuitos.repositories.CampusRepository;
import engtelecom.bcd.exemploumparamuitos.repositories.CursoRepository;
import engtelecom.bcd.exemploumparaum.ExemploJpaApplication;
import engtelecom.bcd.exemploumparaum.repositories.EnderecoRepository;
import engtelecom.bcd.exemploumparaum.repositories.PessoaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.management.MXBean;
import java.sql.SQLOutput;
import java.util.Optional;

@SpringBootApplication

public class MainUmParaMuitos {
    public static void main(String[] args) {
        SpringApplication.run(MainUmParaMuitos.class, args);
    }

    @Bean
    public CommandLineRunner exemploInicial(CursoRepository cursoRepository, CampusRepository campusRepository){
        return (args) -> {
            Campus saoJose = new Campus("São José", "SJE", "Ruabla", "São Jose");
            Campus floripa = new Campus("Florianopolis", "FLP", "Ruable", "Floripa");
            campusRepository.save(saoJose);
            campusRepository.save(floripa);

            Curso tele = new Curso("Eng Tele",4800,saoJose);

            cursoRepository.save(tele);

            System.out.println("..::Campi::..");
            campusRepository.findAll().forEach(System.out::println);

            System.out.println("..::Cursos::..");
            cursoRepository.findAll().forEach(System.out::println);

            // Para dar Update

            Optional<Curso> c = cursoRepository.findById(1);

            if (c.isPresent()){
                Curso telecom = c.get();

                telecom.setCarga_horaria(1000);

                cursoRepository.save(telecom);

            }
        };
    }
}
