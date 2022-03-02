import React, { useState } from 'react';
import { Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const SelectComponent = ({ label, name }) => {
  const [status, setStatus] = useState('');

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={status}
        error={!!errors[name]}
        label={label}
        onChange={handleChange}
        {...register(name)}
      >
        <MenuItem value={'ACTIVE'}>ACTIVE</MenuItem>
        <MenuItem value={'RESIGNED'}>RESIGNED</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
