import React from 'react'
import { Link as RRLink } from 'react-router'
import Base from './Base'

export default (props) => (
  <Base component='button' {...props} />
)

export const Anchor = (props) => (
  <Base component='a' {...props} />
)

export const Link = (props) => (
  <Base component={RRLink} {...props} />
)
