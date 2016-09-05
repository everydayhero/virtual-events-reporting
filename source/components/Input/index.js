import React from 'react'
import styles from './styles'
import { classes } from '../../utils/css'

export default (props) => (
  <input {...props} className={classes(styles.input)} />
)

export const Label = (props) => (
  <label {...props} className={classes(styles.label)} />
)

export const Select = (props) => (
  <select {...props} className={classes(styles.label)} />
)
