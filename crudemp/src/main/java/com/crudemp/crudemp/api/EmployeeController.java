package com.crudemp.crudemp.api;

import com.crudemp.crudemp.domain.EmployeeTable;
import com.crudemp.crudemp.model.Employee;
import com.crudemp.crudemp.repository.EmployeeRepository;
import com.crudemp.crudemp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin

@RestController
public class EmployeeController {

    @Autowired
    EmployeeService result;
    // get all Employees
    @GetMapping("/employees")
    @ResponseStatus(code= HttpStatus.ACCEPTED)
    public List<EmployeeTable> getAll(){
        return result.getEmployees();
    }
    //creating new Employee
    @ResponseStatus(code = HttpStatus.CREATED)
    @PostMapping("/create")
    public void create(@RequestBody Employee data){
        result.create(data);
    }
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    @DeleteMapping("delete/{id}")
    public void delete(@PathVariable Long id){
        result.delete(id);
    }
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    @PutMapping("/update/{id}")
    public void update(@RequestBody  Employee data,@PathVariable long id){
        result.update(id,data);
    }
    @ResponseStatus(code = HttpStatus.FOUND)
    @GetMapping("empid/{id}")
    public Optional<EmployeeTable> getId(@PathVariable Long id){
        return result.empId(id);
    }
}
