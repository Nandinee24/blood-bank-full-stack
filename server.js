const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');


//dot config
dotenv.config();



//rest object
const app = express();

//mongodb connection
connectDB();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
//1 test route
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth', require('./routes/authRouts'));
app.use('/api/v1/inventory', require('./routes/inventoryRouts'));



//port
const PORT = process.env.PORT || 8080;

// //listen
app.listen(PORT, () => {
    console.log(`Node server running In ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
});
