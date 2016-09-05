import {
  rhythm,
  colors
} from '../../../../utils/css'

export default {
  base: {},
  nav: {
    backgroundColor: colors.grey.dark,
    display: 'flex'
  },
  navLink: {
    flex: '0 0 auto',
    color: colors.white,
    padding: rhythm(0.5),
    ':hover': {
      color: colors.green.primary
    }
  }
}
