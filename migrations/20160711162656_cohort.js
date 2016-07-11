
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohort', function(table) {
    table.increments();
    table.string('name');
    table.integer('student_count');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohort');
};
