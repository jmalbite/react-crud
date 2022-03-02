const employeeModel = require('../model/employee.model');

exports.getAll = (req, res) => {
  //get query from model
  employeeModel.getAll((err, data) => {
    try {
      res.send(data);
    } catch (error) {
      res.status(409).send({ message: error.message });
      console.log(err);
    }
  });
};

exports.addNewEmployee = (req, res) => {
  const newData = new employeeModel(req.body);
  console.log(newData);
  //save visitor data
  employeeModel.addEmployee(newData, (err, data) => {
    try {
      res.send(data);
    } catch (error) {
      res.status(409).send({ message: error.message });
    }
  });
};

exports.editEmployee = (req, res) => {
  const updateData = new employeeModel(req.body);

  //checking for null from req.body
  if (req.body.constructor === Object && Object.keys(req.body).length === 0)
    return res.send(400).send({ success: false, message: 'no data to change' });
  else {
    console.log('id', req.params.id);
    employeeModel.updateEmployee(req.params.id, updateData, (err, data) => {
      if (err) {
        console.log('error sa controller', err);
        if (err.kind === 'not found') return res.status(404).send({ message: 'ID not found ' + req.params.id });
        else return res.status(500).send({ message: 'error in updating' + req.params.id });
      } else res.send(data);
    });
  }
};

exports.deleteEmployee = (req, res) => {
  employeeModel.removeEmployee(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.json({ success: true, message: 'employee deleted', data: employee });
  });
};

exports.getEmployeeByID = (req, res) => {
  employeeModel.searchByID(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.json({ success: true, message: 'employee found', data: employee });
  });
};
