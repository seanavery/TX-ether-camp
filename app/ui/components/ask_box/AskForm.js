import React from 'react'
import {render} from 'react-dom'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class AskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: [],
      amount: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
      </form>
    )
  }
}

module.exports = AskForm
