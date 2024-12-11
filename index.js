const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const addSchool = require('./routes/addSchool');
const listSchools = require('./routes/listSchools')

const app = express();
const PORT = process.env.PORT; 
app.use(bodyParser.json());


app.use('/api', addSchool);
app.use('/api', listSchools);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

