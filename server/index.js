const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

//middlerwares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing if the api is working
app.get('/', (req, res) => {
  res.json({ message: 'simple api is working' });
});

const employeeRouter = require('./routes/employee.route.js');
//create employee routes
app.use('/api/employee', employeeRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('server is running port 8080');
});
