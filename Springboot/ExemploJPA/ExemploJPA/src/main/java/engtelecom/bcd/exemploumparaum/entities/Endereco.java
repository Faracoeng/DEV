package engtelecom.bcd.exemploumparaum.entities;

import jakarta.persistence.*;
import lombok.*;

// Lombok ja gera contrutores, getter, setter e tudo mais
//@Data
@Getter
@Setter
@ToString(exclude={"pessoa"})
@NoArgsConstructor
@Entity
@RequiredArgsConstructor

public class Endereco {
    //Definindo que é chave
    @Id
    //Definindo que pe auto Increment
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_endereco;
    // Definindo como Not null
    // @Column é para a base nao ser nula
    @Column(nullable = false)
    // Aqui é do LOMBOK para a classe obrigar a inserir este valor no contrutor da classe
    @NonNull
    private String cep;
    @Column(nullable = false)
    @NonNull
    private String cidade;
    @Column(nullable = false)
    @NonNull
    private String estado;
    @Column(nullable = false)
    @NonNull
    private String rua;
    // Definindo relacionamentos
    @OneToOne
    // Especificante a chave estrangeira
    @JoinColumn(name = "id_pessoa", nullable = false)
    @NonNull
    private Pessoa pessoa;

}
