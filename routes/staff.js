var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


/* GET users listing. */
router.get('/', function(request, response, next) {
  queries.listStaff().then(function(staff) {
    response.render('staff/list-staff', { staff: staff });
  });
});

router.get('/new', function(request, response, next) {
  response.render('staff/add-staff');
});

router.get('/delete/:id', function(request, response, next) {
  queries.getStaff(request.params.id).then(function(staff) {
    response.render('staff/delete-staff', { staff: staff });
  });
});

router.post('/', function(request, response, next) {
  var staff = {
    first_name: request.body.first_name,
    last_name: request.body.last_name
  };
  queries.addStaff(staff).then(function(staff) {
    response.redirect('/staff');
  });
});

router.delete('/:id', function(request, response, next) {
  queries.removeStaff(request.params.id).then(function() {
    response.redirect('/staff');
  });
});

module.exports = router;
