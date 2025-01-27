const express = require('express');
const ErrorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static('uploads'));

if (process.env.NODE_ENV === 'PRODUCTION') {
    require('dotenv').config({ path: 'backend/config/config.env' });
}

// import Routes
const user = require('./controller/user');

app.use('/api/v2/user', user);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;