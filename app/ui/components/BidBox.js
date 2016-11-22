import React from 'react'
import {render} from 'react-dom'

import BidForm from './bid_box/BidForm'

class BidBox extends React.Component {
  render() {
    return (
      <div>
        <BidForm />
      </div>
    )
  }
}

module.exports = BidBox
