
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE cohort RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cohort').insert({
          name: 'g15',
          student_count: 27
        }),
        knex('cohort').insert({
          name: 'g25',
          student_count: 25
        }),
        knex('cohort').insert({
          name: 'g10',
          student_count: 20
        }),
      ]);
    });
};
