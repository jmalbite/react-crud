import React, { useEffect, useState } from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployee } from '../actions/employee.action';

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const employeesData = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(getAllEmployee());
  }, [dispatch]);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, marginTop: '100px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeesData.map((row) => (
              <TableRow key={row.employee_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.employee_id}
                </TableCell>
                <TableCell>{row.employee_name}</TableCell>
                <TableCell>{row.employee_age}</TableCell>
                <TableCell>{row.employee_status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default EmployeeTable;
