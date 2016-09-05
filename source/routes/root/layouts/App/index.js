import React from 'react'
import { Link } from 'react-router'
import './style.scss'
import styles from './styles'
import { classes } from '../../../../utils/css'

export default ({ children }) => (
  <div className={classes(styles.base)}>
    <nav className={classes(styles.nav)}>
      <Link to='/' className={classes(styles.navLink)}>Home</Link>
    </nav>

    {children}
  </div>
)
