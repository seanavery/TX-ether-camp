import React from 'react'
import {render} from 'react-dom'
import {Table} from 'react-bootstrap'

class BidLedger extends React.Component {
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
                <td>{i}</td>
                <td>{price}</td>
                <td>5</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

module.exports = BidLedger
