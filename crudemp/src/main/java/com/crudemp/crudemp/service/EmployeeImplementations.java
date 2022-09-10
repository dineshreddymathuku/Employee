package com.crudemp.crudemp.service;

import com.crudemp.crudemp.domain.EmployeeTable;
import com.crudemp.crudemp.model.Employee;
import com.crudemp.crudemp.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeImplementations implements EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
    public void create(Employee data){
        EmployeeTable Table=new EmployeeTable();
        BeanUtils.copyProperties(data,Table);
        employeeRepository.save(Table);
    }
   public List<EmployeeTable> getEmployees(){
        return employeeRepository.findAll();
    }

    public void delete(long id){
        employeeRepository.deleteById(id);
    }

    @Override
    public void update(Long id, Employee data) {
        EmployeeTable Table=new EmployeeTable();
        BeanUtils.copyProperties(data,Table);
        Table.setId(id);
        employeeRepository.save(Table);
    }


    public Optional<EmployeeTable> empId(long id){
       return employeeRepository.findById(id);
    }
}
