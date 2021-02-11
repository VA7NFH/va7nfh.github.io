import React from 'react'
import { Typography } from '@material-ui/core'

class Hummingbird extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h4" align="center">
          Hummingbird
        </Typography>
        <Typography variant="body1" align="center">
          The Hummingbird is a series of low-cost, reliable RCS engines.
        </Typography>
        <div>
          <Typography variant="h4" align="center">
            Hummingbird A
          </Typography>
          <Typography variant="body1" align="center">
            Hummingbird A is currently the smallest version of the Hummingbird RCS lineup. Hummingbird A is designed for a lunar lander.
          </Typography>
        </div>
      </div>
    )
  }
}

export default Hummingbird;
