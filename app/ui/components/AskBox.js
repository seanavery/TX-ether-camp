import React from 'react'
import {render} from 'react-dom'

import AskForm from './ask_box/AskForm'

class AskBox extends React.Component {
  render() {
    return (
      <div>
        <AskForm />
      </div>
    )
  }
}

module.exports = AskBox
