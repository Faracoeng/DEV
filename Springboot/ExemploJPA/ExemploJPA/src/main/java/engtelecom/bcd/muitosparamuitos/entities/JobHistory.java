package engtelecom.bcd.muitosparamuitos.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Table(name = "jobhistory")
@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter

public class JobHistory {
    @Id
    private String position;
    @Id
    // Definindo que é chave estrangeira
    @ManyToOne
    @JoinColumn(name = "empno",nullable = false)
    private Employee employee;
    private Date startdate;
    private Date enddate;
    private double salary;

}
