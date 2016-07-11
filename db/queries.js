var knex = require('./knex');

module.exports = {

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
  }

};
