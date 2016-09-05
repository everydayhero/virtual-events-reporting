import {
  rhythm,
  colors,
  radiuses,
  transitions
} from '../../utils/css'

const createTheme = ({
  backgroundColor,
  color
}) => ({
  backgroundColor,
  color,
  ':hover': {
    backgroundColor: color,
    color: backgroundColor
  }
})

export default {
  base: {
    textAlign: 'left',
    borderRadius: radiuses.rounded,
    display: 'inline-block',
    marginRight: rhythm(0.125, 'em'),
    lineHeight: 1,
    padding: `${rhythm(0.5, 'em')} ${rhythm(0.75, 'em')}`,
    transition: `background-color ${transitions.easeOut}`,
    borderColor: 'currentColor',
    borderWidth: 'thin',
    borderStyle: 'solid'
  },
  basic: createTheme({
    color: colors.grey.dark,
    backgroundColor: colors.white
  }),
  primary: createTheme({
    color: colors.green.primary,
    backgroundColor: colors.white
  })
}
