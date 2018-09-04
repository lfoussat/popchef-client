import React from 'react'
import './Meal.css'
import { Table, Icon } from 'semantic-ui-react'

const Meal = ({ meal }) => {
  const { title, description, image, price, temperature } = meal

  return (
    <Table.Row>
      <Table.Cell collapsing textAlign='right'>
        <img src={image} alt={title} style={{ maxWidth: '100%' }} />
      </Table.Cell>
      <Table.Cell textAlign='left' style={{ padding: '15px' }}>
        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <p style={{ fontFamily: 'Nothing You Could Do, cursive', fontSize: '18px' }}>{title}</p>
          <p style={{ fontSize: '14px' }}>{description}</p>
          <p><Icon name='fire'/>Se mange {temperature}</p>
        </div>
      </Table.Cell>
      <Table.Cell collapsing><p style={{ fontFamily: 'Nothing You Could Do, cursive', fontSize: '18px', padding: '15px' }}>{price}€</p></Table.Cell>
    </Table.Row>
  )
}

export default Meal
