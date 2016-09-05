import {
  rhythm,
  colors
} from '../../../../utils/css'

const linkBase = {
  padding: rhythm(0.5),
  lineHeight: rhythm(1),
  borderRight: `thin solid ${colors.grey.light}`,
  borderBottomWidth: rhythm(0.25),
  borderBottomStyle: 'solid',
  borderBottomColor: colors.grey.light,
  ':hover': {
    borderBottomColor: colors.grey.dark
  }
}

export default {
  nav: {
    display: 'flex',
    flexFlow: 'row'
  },
  linkBasic: {
    ...linkBase,
    flex: '1 1 50%'
  },
  linkLarge: {
    ...linkBase,
    flex: '1 1 100%'
  }
}
