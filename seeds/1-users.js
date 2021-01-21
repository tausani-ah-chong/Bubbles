
exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, name: 'multi', city:'Apia'},
    {id: 2, name: 'tausani', city:'Capital Of The Pacific'},
    {id: 3, name: 'pete', city:'Hook Strait'},
    {id: 4, name: 'steve', city:'Hypetown'},
    {id: 5, name: 'peter', city:'Hackysacksville'}
  ])
}
