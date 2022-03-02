const express = require('express');
const router = express.Router();

const employeeController = require('../controller/employee.controller.js');

//get all employee
router.get('/', employeeController.getAll);
router.get('/:id', employeeController.getEmployeeByID);
router.post('/', employeeController.addNewEmployee);
router.put('/:id', employeeController.editEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
