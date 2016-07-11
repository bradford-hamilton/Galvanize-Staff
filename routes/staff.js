var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


/* GET users listing. */
router.get('/', function(request, response, next) {
  queries.listStaff().then(function(staff) {
    response.render('list-staff', { staff: staff });
  });
});

module.exports = router;
