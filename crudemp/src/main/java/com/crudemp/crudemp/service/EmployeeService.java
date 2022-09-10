package com.crudemp.crudemp.service;

import com.crudemp.crudemp.domain.EmployeeTable;
import com.crudemp.crudemp.model.Employee;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    public void create(Employee Long);

    public List<EmployeeTable> getEmployees();

    public void delete(long id);

    public  void update(Long id,Employee data);

    Optional<EmployeeTable> empId(long id);
}
