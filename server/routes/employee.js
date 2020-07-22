const express = require('express');
const router = express.Router();
const employeesCtrl = require('../controllers/employees');

/* GET home page. */
router.get('/', employeesCtrl.get);
router.post('/', employeesCtrl.create);
router.delete('/:id', employeesCtrl.delete);

module.exports = router;
