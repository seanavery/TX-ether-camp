import React from 'react'
import {render} from 'react-dom'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class AskForm extends React.Component {
  constructor(props) {
    super(props)

    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handlePriceChange(e) {
    console.log(e.target.value)
    this.setState({price: e.target.value})
  }

  handleAmountChange(e) {
    console.log(e.target.value)
    this.setState({amount: e.target.value})
  }

  handleSubmit(e) {
    this.props.submitAsk(this.state.price, this.state.amount)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <FormGroup>
          <ControlLabel>Price:</ControlLabel>
          <FormControl onChange={this.handlePriceChange} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Amount:</ControlLabel>
          <FormControl onChange={this.handleAmountChange} />
        </FormGroup>
        <Button type='submit'>
          SUBMIT ASK
        </Button>
      </form>
    )
  }
}


module.exports = AskForm
