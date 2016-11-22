import React from 'react'
import {render} from 'react-dom'

import BidForm from './bid_box/BidForm'
import BidLedger from './bid_box/BidLedger'

class BidBox extends React.Component {
  render() {
    return (
      <div>
        <BidForm />
        <BidLedger />
      </div>
    )
  }
}

module.exports = BidBox
