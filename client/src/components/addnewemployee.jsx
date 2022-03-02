import React from 'react';
import InputComponent from './interfaces/textfield.component';
import SelectComponent from './interfaces/select.component';
import { Grid, Button, Paper } from '@mui/material/';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { saveEmployeeData } from '../actions/employee.action';

const schema = yup.object().shape({
  employee_name: yup.string().required(),
  employee_age: yup.number().required(),
  employee_status: yup.string().required(),
});

const AddNewEmployee = () => {
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  function clearData() {
    methods.reset({
      employee_name: '',
      employee_age: '',
      employee_status: '',
    });
  }

  const submitData = (data) => {
    dispatch(saveEmployeeData(data));
    clearData();
  };

  return (
    <Grid style={{ height: '20vh', marginTop: '20px' }} container justifyContent="center" alignItems="center">
      <FormProvider {...methods}>
        <Paper elevation={1} style={{ padding: 20, width: '50%' }}>
          <form onSubmit={methods.handleSubmit(submitData)}>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <InputComponent label="Full Name" name="employee_name" type="text" />
              </Grid>
              <Grid item>
                <InputComponent label="Age" name="employee_age" type="number" />
              </Grid>
              <Grid item>
                <SelectComponent label="Status" name="employee_status" />
              </Grid>

              <Grid item>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </FormProvider>
    </Grid>
  );
};

export default AddNewEmployee;
