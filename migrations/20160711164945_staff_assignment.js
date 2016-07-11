
exports.up = function(knex, Promise) {
  return knex.schema.createTable('staff_assignment', function(table) {
    table.increments();
    table.integer('staff_id').references('id').inTable('staff').onDelete('CASCADE');
    table.integer('cohort_id').references('id').inTable('cohort').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('staff-assignment');
};
