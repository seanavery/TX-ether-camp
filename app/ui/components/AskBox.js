import React from 'react'
import {render} from 'react-dom'
import update from 'react-addons-update'

import AskForm from './ask_box/AskForm'
import AskLedger from './ask_box/AskLedger'

class AskBox extends React.Component {
  constructor() {
    super()
    this.state = {
      price: [],
      amount: []
    }

    this.submitAsk = this.submitAsk.bind(this)
  }

  submitAsk(price, amount) {
    var newPriceArray = update(this.state.price, {$push: [price]})
    var newAmountArray = update(this.state.amount, {$push: [amount]})
    this.setState({
      price: newPriceArray,
      amount: newAmountArray
    })
  }
  render() {
    return (
      <div>
        <AskForm submitAsk={this.submitAsk} />
        <AskLedger price={this.state.price} amount={this.state.amount} />
      </div>
    )
  }
}

module.exports = AskBox
