var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


/* GET users listing. */
router.get('/', function(request, response, next) {
  queries.listCohorts().then(function(cohorts) {
    response.render('cohorts/list-cohort', { cohorts: cohorts });
  });
});

router.get('/new', function(request, response, next) {
  response.render('cohorts/add-cohort');
});

router.get('/delete/:id', function(request, response, next) {
  queries.getCohorts(request.params.id).then(function(cohorts) {
    response.render('cohorts/delete-cohort', { cohorts: cohorts });
  });
});

router.post('/', function(request, response, next) {
  var cohorts = {
    name: request.body.name,
    student_count: request.body.student_count
  };
  queries.addCohorts(cohorts).then(function(cohorts) {
    response.redirect('/cohorts');
  });
});

router.delete('/:id', function(request, response, next) {
  queries.removeCohorts(request.params.id).then(function() {
    response.redirect('/cohorts');
  });
});

module.exports = router;
