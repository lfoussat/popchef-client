import React, { Component } from 'react'
import { Container, Table, Button } from 'semantic-ui-react'
import './App.css'
import Meal from './components/Meal.js'
import Header from './components/Header.js'
import { getMeals } from './api.js'

const showMeals = meals => meals.map(m => <Meal key={m.id} meal={m} />)
const filterByType = (meals, type) => meals.filter(meal => meal.type === `${type}`)
const sortByPrice = meals => meals.sort((a, b) => a.price - b.price)

class App extends Component {
  state = {
    meals: [],
    toBeSort: [],
    status: 'getAll'
  }

  changeStatus = newStatus => this.setState({ status: `${newStatus}` })

  constructor () {
    super()

    getMeals().then(meals => this.setState({ meals: meals, toBeSort: meals }))
  }

  getAppetizer () {
    return <Table.Body>
      {showMeals(filterByType(this.state.meals, 'Entrée'))}
    </Table.Body>
  }

  getMainMeals () {
    return <Table.Body>
      {showMeals(filterByType(this.state.meals, 'Plat'))}
    </Table.Body>
  }

  getByPrice () {
    return <Table.Body>
      {showMeals(sortByPrice(this.state.toBeSort))}
    </Table.Body>
  }

  getAll () {
    return <Table.Body>
      {showMeals(this.state.meals)}
    </Table.Body>
  }

  render () {
    return (
      <div className="App">
        <Container fluid>
          <Header />
          <h2>La carte</h2>
          <Button color='yellow' onClick={() => {
            this.changeStatus('getAppetizer')
            this.setState({ toBeSort: filterByType(this.state.meals, 'Entrée') })
          }}>Entrées</Button>
          <Button
            color='yellow'
            onClick={() => {
              this.changeStatus('getMainMeals')
              this.setState({ toBeSort: filterByType(this.state.meals, 'Plat') })
          }}>Plats</Button>
          <Button
            color='yellow'
            onClick={() => this.changeStatus('getByPrice')}
          >Trié par prix croissant</Button>
          <Button basic color='yellow' onClick={() => {
            this.changeStatus('getAll')
            this.setState({ toBeSort: this.state.meals })
          }}>Tout</Button>
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
