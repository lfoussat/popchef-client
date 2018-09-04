import React from 'react'

const Meal = ({ meal }) => {
  const { type, title, description, image, price, temperature } = meal

  return (
    <tr>
      <td><img src={image} alt={title} /></td>
      <td>{title}</td>
      <td>{description}</td>
      <td>Se mange {temperature}</td>
      <td>{price} €</td>
    </tr>
  )
}

export default Meal
