import AddNewEmployee from './components/addnewemployee';
import EmployeeTable from './components/employeetable';
import './App.css';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Grid container direction="row">
        <Grid item lg={6}>
          <EmployeeTable />
        </Grid>
        <Grid item lg={6}>
          <AddNewEmployee />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
