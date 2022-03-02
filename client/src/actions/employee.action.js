import * as api from '../api/index';

export const getAllEmployee = () => async (dispatch) => {
  try {
    const { data } = await api.getAllEmployee();
    dispatch({ type: 'FETCH_ALL_EMPLOYEES', payload: data });
    //
  } catch (error) {
    console.log(error);
  }
};

export const saveEmployeeData = (newData) => async (dispatch) => {
  try {
    const { data } = await api.saveEmployeeData(newData);
    console.log(data);
    dispatch({ type: 'SAVE_EMPLOYEE_DATA', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
    dispatch({ type: 'ERROR_SAVING' });
  }
};
