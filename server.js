const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path'); // <-- You had this commented, but you'll need it
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// MongoDB connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth', require('./routes/authRouts'));
app.use('/api/v1/inventory', require('./routes/inventoryRouts'));
app.use('/api/v1/analytics', require('./routes/analyticsRoutes'));
app.use('/api/v1/admin', require('./routes/adminRoutes'));
app.use('/api/v1/mail', require('./routes/mailRoutes'));

// ** Serve static files from the React app in production **
if (process.env.NODE_ENV === 'production') {
    // Set the static folder to the client/build directory
    app.use(express.static(path.join(__dirname, './client/build')));

    // Serve the React app for all other routes
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build', 'index.html'));
    });
}

// Port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgCyan.white);
});
