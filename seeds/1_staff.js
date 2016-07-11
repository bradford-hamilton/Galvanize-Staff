exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE staff RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('staff').insert({
          first_name: 'Kyle',
          last_name: 'Coberly'
        }),
        knex('staff').insert({
          first_name: 'Elana',
          last_name: 'Kopelevich'
        }),
        knex('staff').insert({
          first_name: 'Roberto',
          last_name: 'Ortega'
        }),
        knex('staff').insert({
          first_name: 'Danny',
          last_name: 'Fritz'
        })
      ]);
    });
};
