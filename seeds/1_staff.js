exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE staff RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('staff').insert({
          id: 1,
          first_name: 'Kyle',
          last_name: 'Coberly'
        }),
        knex('staff').insert({
          id: 2,
          first_name: 'Elana',
          last_name: 'Kopelevich'
        }),
        knex('staff').insert({
          id: 3,
          first_name: 'Roberto',
          last_name: 'Ortega'
        }),
        knex('staff').insert({
          id: 4,
          first_name: 'Danny',
          last_name: 'Fritz'
        })
      ]);
    });
};
