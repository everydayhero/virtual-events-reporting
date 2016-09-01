import React from 'react'
import { Link } from 'react-router'
import './style.scss'

export default ({ children }) => (
  <div>
    <nav>
      <Link to='/'>Home</Link>
    </nav>

    {children}
  </div>
)
