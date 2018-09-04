import React from 'react'
import './Header.css'
import { Menu } from 'semantic-ui-react'

const Header = () =>
  <Menu width={16}>
    <Menu.Item name='title'>
      <h1>Popchef</h1>
    </Menu.Item>
  </Menu>

export default Header
