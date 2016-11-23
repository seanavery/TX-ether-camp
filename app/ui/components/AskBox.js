import React from 'react'
import {render} from 'react-dom'

import AskForm from './ask_box/AskForm'
import AskLedger from './ask_box/AskLedger'

class AskBox extends React.Component {
  constructor() {
    super()
    this.state = {
      price: [],
      amount: []
    }

    this.
  }

  submitAsk() {

  }
  render() {
    return (
      <div>
        <AskForm submitAsk={this.submitAsk} />
        <AskLedger />
      </div>
    )
  }
}

module.exports = AskBox
