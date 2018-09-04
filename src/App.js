import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
state = {
    meals: []
  }
  constructor() {
    super()
    fetch('http://localhost:4000/meals/1')
      .then(res => res.json())
      .then(console.log)
      .then(meals => {
        this.setState({ meals: meals })
      })
  }
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    )
  }
}

export default App
