const api = 'http://localhost:4000'

export const getMeals = () => fetch(`${api}/meals/1`)
  .then(res => res.json())
