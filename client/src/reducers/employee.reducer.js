export const employees = (employees = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_EMPLOYEES':
      return (employees = action.payload);

    // case 'SAVE_EMPLOYEE_DATA':
    //   return (employees = {
    //     ...employees,
    //     employee_id: action.payload.employee_id,
    //     employee_name: action.payload.employee_name,
    //     employee_age: action.payload.employee_age,
    //     employee_status: action.payload.employee_status,
    //   });

    default:
      return employees;
  }
};
