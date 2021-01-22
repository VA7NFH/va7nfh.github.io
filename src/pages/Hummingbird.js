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
          The Hummingbird is a series of low-cost, reliable RCS engines, which are designed for a lunar lander.
      
          The first version is the Hummingbird A, which is currently the smallest version of the Hummingbird RCS lineup.
        </Typography>
      </div>
    )
  }
}

export default Hummingbird;
