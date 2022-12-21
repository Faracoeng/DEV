package engtelecom.bcd.muitosparamuitos.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
public class Department {
    @Id
    private Integer depno;
    private String dname;
    private String location;
    private Integer head;

    @OneToMany (mappedBy = "department")
    private Set<Employee> employees;

}
