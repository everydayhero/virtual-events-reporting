import React, { Component } from 'react'
import { unparse } from 'papaparse'

const createHeader = (
  setSortedBy = () => {},
  sortedBy = ''
) => (header, index) => {
  const { attribute, label } = header
  const sortAttribute = sortedBy === attribute
    ? `-${attribute}`
    : attribute

  return (
    <th key={index}>
      <button onClick={(e) => setSortedBy(sortAttribute)}>
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
  <tr key={index}>
    {headers.map(({ attribute }, index) => (
      <td key={index}>{datum[attribute]}</td>
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
        <button onClick={(e) => this.createCSVURL(sorted)}>Create CSV</button>
        {downloadURL && (
          <a href={downloadURL} target='_blank' download='virtual-event-info.csv'>
            Download CSV
          </a>
        )}

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
