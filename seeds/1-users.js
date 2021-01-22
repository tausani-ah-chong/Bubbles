
exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, name: 'multi', city:'Apia', img: 'user1.jpg' },
    {id: 2, name: 'tausani', city:'Capital Of The Pacific', img: 'user2.jpg' },
    {id: 3, name: 'pete', city:'Hook Strait', img: 'user3.jpg' },
    {id: 4, name: 'steve', city:'Hypetown', img: 'user4.jpg' },
    {id: 5, name: 'peter', city:'Hackysacksville', img: 'user5.jpg' }
  ])
}
