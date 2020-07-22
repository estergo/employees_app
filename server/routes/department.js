var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send(['R&D', 'HR', 'Support', 'Accounting', 'Sales', 'Marketing', 'Management']);
});

module.exports = router;
