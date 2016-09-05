import cxs from 'cxs'
import prefixer from 'inline-style-prefixer/static'

export * from './traits'

export const classes = (styles) => (
  cxs(prefixer(styles))
)

