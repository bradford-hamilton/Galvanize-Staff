var knex = require('./knex');

module.exports = {

  listStaff: function() {
    return knex('staff').select();
  },

  addStaff: function(staff) {
    return knex('staff').insert(staff);
  }

};
