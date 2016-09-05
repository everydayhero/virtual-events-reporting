import { rhythm, colors, radiuses } from '../../../../utils/css'

const input = {
  appearance: 'none',
  lineHeight: rhythm(1),
  padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
  border: `thin solid ${colors.grey.dark}`,
  borderRadius: radiuses.rounded,
  fontSize: 'inherit',
  margin: 0,
  boxSizing: 'border-box',
  display: 'block',
  width: '100%',
  marginRight: rhythm(0.25),
  cursor: 'text',
  ':last-child': {
    marginRight: 0
  }
}

const container = {
  display: 'flex',
  flexFlow: 'row',
  flexWrap: 'wrap'
}

const label = {
  fontSize: '0.8em',
  textTransform: 'uppercase',
  marginBottom: rhythm(0.25)
}

export default {
  base: {
    ...container,
    padding: `${rhythm(0.75)} ${rhythm(0.25)}`,
    borderBottom: `thin solid ${colors.grey.light}`
  },
  filter: {
    flex: '1 1 25%',
    boxSizing: 'border-box',
    marginBottom: rhythm(0.5),
    padding: rhythm(0.25)
  },
  label: {
    ...label,
    lineHeight: rhythm(0.75),
    display: 'block'
  },
  input: {
    ...input
  },
  select: {
    ...input,
    cursor: 'pointer'
  },
  compoundInput: {
    ...container,
    flexWrap: 'nowrap'
  },
  actions: {
    padding: rhythm(0.25),
    justifyContent: 'flex-end'
  }
}
