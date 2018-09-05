import React, { Component } from 'react'
import { Router } from '@reach/router'
import './App.css'
import MealsDisplay from './containers/MealsDisplay.js'
import Home from './containers/Home.js'

class App extends Component {
  render () {
    return (
      <Router>
        <Home path="/" />
        <MealsDisplay path="/meals" />
      </Router>
    )
  }
}

export default App
