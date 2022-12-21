package engtelecom.bcd.muitosparamuitos.entities;

import engtelecom.bcd.exemploumparamuitos.entities.Campus;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor

public class Employee {

    @Id
    private Integer empno;
    private String surname;
    private String forenames;
    private Date dob;
    private String address;
    private String telno;
    private Integer depno;

    @OneToMany(mappedBy = "employee")
    private Set<Employee> jobhistory;

    @ManyToOne
    @JoinColumn(name = "depno", nullable = false)
    @NonNull
    private Department department;

    @ManyToMany
    // Essa tralharada é so para o caso da tabela ja existir
    @JoinTable(name = "empcourse",
           joinColumns = {
            @JoinColumn(name = "empno", referencedColumnName = "empno",
                    nullable = false)
           },
            inverseJoinColumns = {
                @JoinColumn(name = "courseno", referencedColumnName = "courseno",
                nullable = false)
        }
    )
    private Set<Course> courses;
}
