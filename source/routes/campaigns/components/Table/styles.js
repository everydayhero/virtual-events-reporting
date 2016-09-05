import {
  rhythm,
  colors
} from '../../../../utils/css'

export default {
  actions: {
    marginBottom: rhythm(1)
  },
  cell: {
    padding: rhythm(0.5),
    textAlign: 'left',
    borderLeft: 'thin solid whitesmoke',
    ':first-child': {
      borderLeft: 'none'
    }
  },
  row: {
    borderTopColor: colors.grey.light,
    borderTopStyle: 'solid',
    borderTopWidth: 'thin'
  },
  unsorted: {
    ':before': {
      content: '""'
    }
  },
  sortedAscending: {
    ':before': {
      content: '"\\25B2"'
    }
  },
  sortedDescending: {
    ':before': {
      content: '"\\25BC"'
    }
  }
}
