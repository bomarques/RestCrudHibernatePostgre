package br.com.crudhibernate.repository;

import br.com.crudhibernate.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.function.Supplier;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Employee findByEmailId(String emailId);

    ;

}
