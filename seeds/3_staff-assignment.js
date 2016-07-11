exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE staff_assignment RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('staff_assignment').insert({
          staff_id: 1,
          cohort_id: 1
        }),
        knex('staff_assignment').insert({
          staff_id: 1,
          cohort_id: 2
        }),
        knex('staff_assignment').insert({
          staff_id: 1,
          cohort_id: 3
        }),
        knex('staff_assignment').insert({
          staff_id: 2,
          cohort_id: 1
        }),
        knex('staff_assignment').insert({
          staff_id: 1,
          cohort_id: 2
        }),
        knex('staff_assignment').insert({
          staff_id: 3,
          cohort_id: 2
        })
      ]);
    });
};
