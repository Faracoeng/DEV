package engtelecom.bcd.exemploumparamuitos.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Data
@NoArgsConstructor
// Para usar o @NonNull
@RequiredArgsConstructor
@Entity
@ToString(exclude = {"cursos"})
public class Campus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_campus;

    @Column(nullable = false)
    @NonNull
    private String nome;

    @Column(nullable = false)
    @NonNull
    private String sigla;

    @Column(nullable = false)
    @NonNull
    private String endereco;

    @Column(nullable = false)
    @NonNull
    private String cidade;

    @OneToMany
    // Set é uma estrutura de dados para armazenar relações n
    private Set<Curso> cursos;
}
