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
    fontWeight: 'bold',
    flex: '1 1 100%'
  },
  fetching: {
    color: colors.green.primary,
    backgroundColor: colors.green.secondary,
    backgroundImage: [
      `repeating-linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.75) 0,
        rgba(255, 255, 255, 0.75) 25%,
        ${colors.green.secondary} 25%,
        ${colors.green.secondary} 50%
      )`
    ],
    animation: 'progress 2s linear infinite',
    backgroundSize: '50px 50px',

    '@keyframes progress': {
      '0%': {
        backgroundPosition: '0 0'
      },
      '100%': {
        backgroundPosition: '-100px 0px'
      }
    }
  },

  fetched: {
    color: colors.grey.dark,
    backgroundColor: colors.white,
    backgroundImage: 'none',
    animation: 'none'
  },

  failed: {
    color: colors.orange,
    backgroundColor: colors.white,
    backgroundImage: 'none',
    animation: 'none'
  }
}
