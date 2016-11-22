import React from 'react'
import {render} from 'react-dom'

import AskForm from './ask_box/AskForm'
import AskLedger from './ask_box/AskLedger'

class AskBox extends React.Component {
  render() {
    return (
      <div>
        <AskForm />
        <AskLedger />
      </div>
    )
  }
}

module.exports = AskBox
