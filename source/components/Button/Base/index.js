import React from 'react'
import { classes } from '../../../utils/css'
import merge from 'lodash/merge'
import styles from '../styles'

export default ({ component: Component, ...props, theme }) => (
  <Component {...props}
    className={classes(merge(
      styles.base,
      styles[theme || 'basic']
    ))}
  />
)
