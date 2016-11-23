import React from 'react'
import {render} from 'react-dom'
import update from 'react-addons-update'

import BidForm from './bid_box/BidForm'
import BidLedger from './bid_box/BidLedger'

class BidBox extends React.Component {
  constructor() {
    super()
    this.state = {
      price : [],
      amount : []
    }
    this.submitBid = this.submitBid.bind(this)
  }

  submitBid(price, amount) {

    this.setState{

    }
  }

  render() {
    return (
      <div>
        <BidForm submitBid={this.submitBid}/>
        <BidLedger />
      </div>
    )
  }
}

module.exports = BidBox
