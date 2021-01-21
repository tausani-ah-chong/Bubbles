
exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, name: 'multi', city:'Apia', img: '' },
    {id: 2, name: 'tausani', city:'Capital Of The Pacific', img: '' },
    {id: 3, name: 'pete', city:'Hook Strait', img: '' },
    {id: 4, name: 'steve', city:'Hypetown', img: '' },
    {id: 5, name: 'peter', city:'Hackysacksville', img: '' }
  ])
}
