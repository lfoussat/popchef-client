import React from 'react'
import { Link } from '@reach/router'
import './Header.css'
import { Menu } from 'semantic-ui-react'

const Header = () =>
  <Menu width={16}>
    <Menu.Item name='title'>
      <Link to={'/'}><h1>Popchef</h1></Link>
    </Menu.Item>
    <Menu.Item name='meals'>
      <Link to="/meals">La Carte</Link>
    </Menu.Item>
  </Menu>

export default Header
