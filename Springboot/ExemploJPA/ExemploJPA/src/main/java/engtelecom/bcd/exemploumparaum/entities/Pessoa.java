package engtelecom.bcd.exemploumparaum.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

// Lombok ja gera contrutores, getter, setter e tudo mais
@Data
@NoArgsConstructor
// Para usar o @NonNull
@RequiredArgsConstructor
@Entity

public class Pessoa {
    //Definindo que é chave
    @Id
    //Definindo que pe auto Increment
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_aluno;
    // Definindo como Not null
    @Column(nullable = false)
    @NonNull
    private String cpf;
    @Column(nullable = false)
    @NonNull
    private String email;
    @Column(nullable = false)
    @NonNull
    private String nome;

    // Na classe Endereço existe um atributo chamado pessoa do tipo Pessoa
    // ele será a chave estrangeira
    @OneToOne(mappedBy = "pessoa")
    private Endereco endereco;
}
