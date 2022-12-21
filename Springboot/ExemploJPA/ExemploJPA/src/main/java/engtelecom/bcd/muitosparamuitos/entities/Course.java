package engtelecom.bcd.muitosparamuitos.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
public class Course {
    @Id
    private Integer courseno;
    private String cname;
    private Date cdate;
    @ManyToMany(mappedBy = "courses")
    private Set<Employee> employees;
}
