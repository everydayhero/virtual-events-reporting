import { rhythm, colors, radiuses } from '../../utils/css'

const input = {
  appearance: 'none',
  cursor: 'text',

  fontSize: 'inherit',
  lineHeight: rhythm(1),

  display: 'block',
  boxSizing: 'border-box',
  width: '100%',

  padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
  margin: 0,

  border: `thin solid ${colors.grey.dark}`,
  borderRadius: radiuses.rounded,

  marginRight: rhythm(0.25),
  ':last-child': { marginRight: 0 }
}

const label = {
  fontSize: '0.8em',
  textTransform: 'uppercase',
  marginBottom: rhythm(0.25)
}

const select = {
  ...input,
  cursor: 'pointer'
}

export default {
  input,
  select,
  label
}
