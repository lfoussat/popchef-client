const api = window.location.url.includes('localhost')
  ? 'http://localhost:4000'
  : 'https://popchef-server.herokuapp.com/'

export const getMeals = () => fetch(`${api}/meals/1`)
  .then(res => res.json())
