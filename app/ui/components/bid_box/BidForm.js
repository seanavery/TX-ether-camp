import React from 'react'
import {render} from 'react-dom'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class BidForm extends React.Component {
  constructor() {
    super()
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlePriceChange(e) {

  }

  handleAmountChange(e) {

  }

  handleSubmit(e) {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Price:</ControlLabel>
          <FormControl onChange={this.handlePriceChange} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Amount:</ControlLabel>
          <FormControl onChange={this.handleAmountChange} />
        </FormGroup>
        <Button type='submit'>
          SUBMIT BID
        </Button>
      </form>
    )
  }
}

module.exports = BidForm
