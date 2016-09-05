import React, { Component } from 'react'
import Button, { Anchor } from '../../../../components/Button'
import { unparse } from 'papaparse'
import { classes } from '../../../../utils/css'
import styles from './styles'

const sortedState = (attribute, sortedBy) => {
  if (attribute === sortedBy) {
    return 'sortedAscending'
  } else if (sortedBy[0] === '-' && sortedBy.slice(1) === attribute) {
    return 'sortedDescending'
  } else {
    return 'unsorted'
  }
}

const createHeader = (
  setSortedBy = () => {},
  sortedBy = ''
) => (header, index) => {
  const { attribute, label } = header
  const sortAttribute = sortedBy === attribute
    ? `-${attribute}`
    : attribute

  return (
    <th key={index} className={classes(styles.cell)}>
      <button
        className={classes(styles[sortedState(attribute, sortedBy)])}
        onClick={(e) => setSortedBy(sortAttribute)}>
        {label}
      </button>
    </th>
  )
}

const sort = (sortedBy, collection) => {
  const isReversed = sortedBy[0] === '-'
  const attribute = isReversed
    ? sortedBy.slice(1)
    : sortedBy

  const sorted = collection.sort((a, b) => (
    a[attribute] - b[attribute]
  ))

  return (
    isReversed
      ? sorted.reverse()
      : sorted
  )
}

const createRow = (headers) => (datum, index) => (
  <tr key={index} className={classes(styles.row)}>
    {headers.map(({ attribute }, index) => (
      <td key={index} className={classes(styles.cell)}>{datum[attribute]}</td>
    ))}
  </tr>
)

class Table extends Component {
  constructor (props) {
    super(props)

    this.state = {
      downloadURL: ''
    }
  }

  createCSVURL (data) {
    const { URL, Blob } = global
    const csv = unparse(data)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    this.setState({
      downloadURL: url
    })
  }

  render () {
    const {
      data = [],
      headers = [],
      setSortedBy = () => {},
      sortedBy = ''
    } = this.props

    const { downloadURL } = this.state

    const sorted = sort(sortedBy, data)

    return (
      <div>
        <div className={classes(styles.actions)}>
          <Button onClick={(e) => this.createCSVURL(sorted)}>Create CSV</Button>
          {downloadURL && (
            <Anchor theme='primary' href={downloadURL} target='_blank' download='virtual-event-info.csv'>
              Download CSV
            </Anchor>
          )}
        </div>

        <table>
          <thead>
            <tr>
              {headers.map(createHeader(setSortedBy, sortedBy))}
            </tr>
          </thead>
          <tbody>
            {sorted.map(createRow(headers))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
