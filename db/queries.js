var knex = require('./knex');

module.exports = {

  listStaff: function() {
    return knex('staff').select();
  }

};
