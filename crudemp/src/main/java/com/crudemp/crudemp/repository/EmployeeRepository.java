package com.crudemp.crudemp.repository;

import com.crudemp.crudemp.domain.EmployeeTable;
import com.crudemp.crudemp.domain.EmployeeTable;
import com.crudemp.crudemp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeTable, Long> {
}
