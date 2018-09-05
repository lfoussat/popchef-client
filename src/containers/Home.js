import React from 'react'
import { navigate } from '@reach/router'
import Header from '../components/Header.js'
import './Home.css'
import { Container, Button } from 'semantic-ui-react'

const Home = () => {
  return (
    <Container fluid>
      <Header />
      <h2>Bienvenue chez PopChef !</h2>
      <section className='welcome'>
        <p>Le plateau repas d'entreprise réinventé</p>
        <p>Livraison à Paris et sa région</p>
        <Button color='yellow' onClick={() => navigate('/meals')}>
          Découvrir ce qu'on propotte...
          <span role='img' aria-label='good food'>🥦🥕🥔</span>
        </Button>
      </section>
    </Container>
  )
}

export default Home
