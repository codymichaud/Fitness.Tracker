const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');

const htmlRoute = require('./routes/htmlRoute');
const apiRoute = require('./routes/apiRoute');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(apiRoute);
app.use(htmlRoute);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});