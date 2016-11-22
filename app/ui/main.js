import React from 'react'
import {render} from 'react-dom'
import {Grid, Col} from 'react-bootstrap'

import BidBox from './components/BidBox'
import AskBox from './components/AskBox'
import Navbar from './components/Navbar'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid>
          <Col xs={12} md={6}>
            <BidBox />
          </Col>
          <Col xs={12} md={6}>
            <AskBox />
          </Col>
        </Grid>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
