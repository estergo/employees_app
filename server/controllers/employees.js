const EmployeeSchema = require('../models/employee');
const mongoose = require('mongoose');
const Employee = mongoose.model('employee', EmployeeSchema);

exports.get = (req, res) => {
    const pagination = {
        skip: +req.query.skip || 0,
        limit: +req.query.limit || 10
    };

    // show only active employees by default
    const query = {};
    if (!req.query.showAll) {
        query.enabled = true;
    }

    Employee.find(query, '', pagination).then(data => {
        res.send(data);
    }).catch(err => handleError(res, err));
    
};

exports.create = (req, res) => {
    const newEmployee = new Employee(req.body);
    Employee.create(newEmployee).then(data => {
        res.status(201).send(data);
    }).catch(err => handleError(res, err));
};

exports.delete = (req, res) => {
    Employee.findOneAndUpdate({ id: req.params.id }, {enabled: false})
        .then(() => {
            res.status(204).send();
        }).catch(err => handleError(res, err));
};

function handleError(res, err) {
    console.log('Error: ', err);
    res.status(500).send({sucess: false, msg: 'unexpected error'});
}



