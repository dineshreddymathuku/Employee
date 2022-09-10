import axios from 'axios';

class EmployeeService {
	getAllEmployees = () => {
		return axios.get("http://localhost:8080/employees");
	}

	postEmployees = (data) => {
		return axios.post("http://localhost:8080/create", data);
	}
	updateEmployees = (data) => {
		return axios.put("http://localhost:8080/update/{id}", data);
	}
	deleteEmployees = (data) => {
		return axios.put("http://localhost:8080/delete/{id}", data);
	}
}

export default  new EmployeeService();