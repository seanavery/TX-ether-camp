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
        </thead>
        <tbody>
          {this.props.price.map((price, i) => {
            return (
              <tr key={i}>
                <th>#</th>
                <th>{price}</th>
                <th>5</th>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

module.exports = AskLedger
