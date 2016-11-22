import React from 'react'
import {render} from 'react-dom'
import {Navbar} from 'react-bootstrap'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <strong>TX</strong>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

module.exports = NavBar
