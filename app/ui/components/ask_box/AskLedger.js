import React from 'react'
import {render} from 'react-dom'
import {Table} from 'react-bootstrap'

class AskLedger extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
          <tbody>
          </tbody>
        <thead>
      </Table>
    )
  }
}

module.exports = AskLedger
