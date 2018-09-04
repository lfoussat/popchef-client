import React from 'react'
import './Meal.css'
import { Table, Icon } from 'semantic-ui-react'

const Meal = ({ meal }) => {
  const { title, description, image, price, temperature } = meal

  return (
    <Table.Row>
      <Table.Cell collapsing textAlign='center'>
        <img src={image} alt={title} />
      </Table.Cell>
      <Table.Cell textAlign='left'>
        <div>
          <p>{title}</p>
          <p>{description}</p>
          <p>
            <Icon name={temperature === 'Froid' ? 'snowflake' : 'fire'} />
            Se mange {temperature}
          </p>
        </div>
      </Table.Cell>
      <Table.Cell collapsing><p>{price} €</p></Table.Cell>
    </Table.Row>
  )
}

export default Meal
