import React, { Component } from 'react'
import { Container, Table, Button } from 'semantic-ui-react'
import './App.css'
import Meal from './components/Meal.js'
import Header from './components/Header.js'
import { getMeals } from './api.js'

class App extends Component {
  state = {
    meals: [],
    status: 'getAll'
  }

  changeStatus = newStatus => {
    return this.setState({ status: `${newStatus}` })
  }

  constructor () {
    super()

    getMeals()
      .then(meals => {
        this.setState({ meals: meals })
      })
  }

  getAppetizer () {
    return <Table.Body>
      {this.state.meals
        .filter(m => m.type === 'Entrée')
        .map(m => <Meal key={m.id} meal={m} />)}
    </Table.Body>
  }

  getMainMeals () {
    return <Table.Body>
      {this.state.meals
        .filter(m => m.type === 'Plat')
        .map(m => <Meal key={m.id} meal={m} />)}
    </Table.Body>
  }

  getAll () {
    return <Table.Body>
      {this.state.meals.map(m => <Meal key={m.id} meal={m} />)}
    </Table.Body>
  }

  render () {
    return (
      <div className="App">
        <Container fluid>
          <Header />
          <h2>La carte</h2>
          <Button color='teal' onClick={() => this.changeStatus('getAppetizer')}>Entrées</Button>
          <Button color='teal' onClick={() => this.changeStatus('getMainMeals')}>Plats</Button>
          <Button color='yellow' onClick={() => this.changeStatus('getAll')}>Tout</Button>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3' style={{ fontFamily: 'Nothing You Could Do, cursive', fontSize: '24px', height: '50px', paddingBottom: '20px' }}>
                  A déguster...
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {this[this.state.status]()}
          </Table>
        </Container>
      </div>
    )
  }
}

export default App
