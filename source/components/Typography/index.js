import React from 'react'
import styles from './styles'
import { classes } from '../../utils/css'

export const H1 = ({ children }) => (
  <h1 className={classes(styles.heading1)}>{children}</h1>
)
