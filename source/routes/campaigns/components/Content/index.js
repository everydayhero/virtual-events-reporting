import React from 'react'
import styles from './styles'
import { classes } from '../../../../utils/css'

export default ({ children }) => (
  <div className={classes(styles.base)}>{children}</div>
)
