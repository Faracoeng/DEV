package engtelecom.bcd.muitosparamuitos;

import engtelecom.bcd.exemploumparamuitos.MainUmParaMuitos;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MuitosParaMuitos {

    public static void main(String[] args) {

        SpringApplication.run(MuitosParaMuitos.class, args);

    }
    @Bean
    public CommandLineRunner exemploInicial(){
        return (args) -> {

        };
    }

}
