const SQL = require('../config/database.config.js');

//create constructor for employee table
const employee_table = function (employee) {
  this.employee_id = employee.employee_id;
  this.employee_name = employee.employee_name;
  this.employee_age = employee.employee_age;
  this.employee_status = employee.employee_status;
};

employee_table.getAll = (result) => {
  SQL.query('SELECT * FROM employee', (err, res) => {
    try {
      result(null, res);
      console.log('Succesfully Fetch');
    } catch (error) {
      result(null, err);
      console.log(error);
      console.log('Error in fetching employee data');
    }
  });
};

employee_table.addEmployee = (newData, result) => {
  SQL.query('INSERT INTO employee SET ?', newData, (err, res) => {
    try {
      result(null, res);
      console.log(res);
      console.log('Log Added Succesfully');
    } catch (error) {
      result(err, null);
      console.log(error);
      console.log('Error in saving visitor log');
    }
  });
};

employee_table.updateEmployee = (employee_id, employeeData, result) => {
  console.log(employeeData);

  SQL.query(
    'UPDATE employee SET employee_name = ?, employee_age = ?, employee_status = ? WHERE employee_id = ?',
    [employeeData.employee_name, employeeData.employee_age, employeeData.employee_status, employee_id],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      //check if employee id is found
      if (res.affectedRows === 0) {
        result({ kind: 'not found' }, null);
        return;
      }

      //if if/else statement is false then update borrowers logs with corresponding id
      console.log('updated logs: ', { id: employee_id, ...employeeData });
      result(null, { employee_id: employee_id, ...employeeData });
    }
  );
};

employee_table.removeEmployee = (employee_id, result) => {
  SQL.query('DELETE FROM employee WHERE employee_id = ?', [employee_id], (err, res) => {
    if (err) {
      console.log('error in deleting employee');
      result(null, err);
    } else result(null, res);
  });
};

employee_table.searchByID = (employee_id, result) => {
  SQL.query('SELECT * FROM employee WHERE employee_id = ? ', employee_id, (err, res) => {
    if (err) {
      console.log('error in searching employee by id');
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = employee_table;
