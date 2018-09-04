import React, { Component } from 'react'
import './App.css'
import Meal from './components/Meal.js'

class App extends Component {
  state = {
    meals: []
  }

  constructor() {
    super()

    fetch('http://localhost:4000/meals/1')
      .then(res => res.json())
      .then(meals => {
        this.setState({ meals: meals })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>La carte</h1>
        <table>
          <tbody>
            {this.state.meals.map(m => <Meal key={m.id} meal={m} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
