import axios from 'axios';

const employeeURL = 'http://localhost:8080/api/employee/';

export const getAllEmployee = () => axios.get(employeeURL);
export const saveEmployeeData = (newData) => axios.post(employeeURL, newData);
export const updateEmployee = (employee_id, newData) => axios.put(`${employeeURL}/${employee_id}`, newData);
export const getEmployeeByID = (employee_id) => axios.get(`${employeeURL}/${employee_id}`);
export const deleteEmployee = (employee_id) => axios.delete(`${employeeURL}/${employee_id}`);
