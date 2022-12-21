package engtelecom.bcd.exemploumparamuitos.entities;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
// Para usar o @NonNull
@RequiredArgsConstructor
@Entity
@ToString
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_curso;

    @Column(nullable = false)
    @NonNull
    private String nome;

    @Column(nullable = false)
    @NonNull
    private Integer carga_horaria;

    @ManyToOne
    @JoinColumn(name = "id_campus", nullable = false)
    @NonNull
    private Campus campus;
}
