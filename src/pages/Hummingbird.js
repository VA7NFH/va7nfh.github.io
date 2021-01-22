import React from 'react'
import { Typography } from '@material-ui/core'

class Hummingbird extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h4" align="center">
          Hummingbird
        </Typography>
        <Typography variant="h6" align="center">
          The Hummingbird is a low-cost, reliable RCS engine, designed for a lunar lander.
        </Typography>
      </div>
    )
  }
}

export default Hummingbird;
