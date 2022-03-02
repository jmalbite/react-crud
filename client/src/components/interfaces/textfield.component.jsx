import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const InputComponent = ({ label, name, type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      label={label}
      variant="outlined"
      error={!!errors[name]}
      helperText={errors[name]?.message ?? ''}
      fullWidth
      type={type}
      {...register(name)}
    />
  );
};

export default InputComponent;
