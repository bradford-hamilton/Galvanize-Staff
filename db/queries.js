var knex = require('./knex');

module.exports = {

  // Staff functions
  listStaff: function() {
    return knex('staff').select();
  },

  addStaff: function(staff) {
    return knex('staff').insert(staff);
  },

  getStaff: function(id) {
    return knex('staff').where({ id: id }).select().first();
  },

  removeStaff: function(id) {
    return knex('staff').where({ id: id }).del();
  },

  // Cohort functions

  listCohorts: function() {
    return knex('cohort').select();
  },

  addCohorts: function(cohort) {
    return knex('cohort').insert(cohort);
  },

  getCohorts: function(id) {
    return knex('cohort').where({ id: id }).select().first();
  },

  removeCohorts: function(id) {
    return knex('cohort').where({ id: id }).del();
  },

  // Both
  getCohortsByStaff: function(staffId) {
    return knex('cohort').select('cohort.*')
      .innerJoin('staff_assignment', 'cohort.id', 'staff_assignment.cohort_id')
      .where({ 'staff_assignment.staff_id': staffId });
  },

  listStaffWithCohorts: function() {
    return this.listStaff()
      .then((returnedStaff) => {
        return staff.map((staffMember) => {
          return this.getCohortsByStaff(staffMember.id)
            .then(function(cohorts) {
              staffMember.cohorts = cohorts;
            });
        });
      });
  }

};
