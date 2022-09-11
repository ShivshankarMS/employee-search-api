const express = require('express');
const employees = require('./data/employeeData');
const app = express();
const port = 3002;

app.get('/empsearch', (req, res) => {
    let isActive = req.query.isActive;
    let employeeList = employees.filter(employee => employee.isActive.toLowerCase() === isActive.toLowerCase());
    res.send(employeeList);
})

app.listen(port, () => {
    console.log(`Employee Search app listening on port ${port}`)
})