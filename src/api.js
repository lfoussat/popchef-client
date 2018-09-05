const api = 'https://popchef-server.herokuapp.com'

export const getMeals = () => fetch(`${api}/meals/1`)
  .then(res => res.json())
