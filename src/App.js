import React, { Component } from 'react'
import { Container, Table } from 'semantic-ui-react'
import './App.css'
import Meal from './components/Meal.js'
import Header from './components/Header.js'
import { getMeals } from './api.js'


class App extends Component {
  state = {
    meals: []
  }

  constructor () {
    super()

    getMeals()
      .then(meals => {
        this.setState({ meals: meals })
      })
  }

  render () {
    return (
      <div className="App">
        <Container fluid>
          <Header />
          <h2>La carte</h2>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3' style={{ fontFamily: 'Nothing You Could Do, cursive', fontSize: '24px', height: '50px', paddingBottom: '20px' }}>
                  Nos plats
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.meals.map(m => <Meal key={m.id} meal={m} />)}
            </Table.Body>
          </Table>
        </Container>
      </div>
    )
  }
}

export default App
