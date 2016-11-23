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
    var newPriceArray = update(this.state.price, {$push: [price]})
    var newAmountArray = update(this.state.amount, {$push: [amount]})
    console.log(newPriceArray)
    console.log(newAmountArray)
    this.setState({
      price: newPriceArray,
      amount: newAmountArray
    })
  }

  render() {
    return (
      <div>
        <BidForm submitBid={this.submitBid}/>
        <BidLedger price={this.state.price} amount={this.state.amount}/>
      </div>
    )
  }
}

module.exports = BidBox
