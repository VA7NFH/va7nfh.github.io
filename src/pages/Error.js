import React from 'react';
import { Typography } from '@material-ui/core'

class Error extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h3" align="center" style={{marginTop: '300px'}}>
          Page not Found
        </Typography>
      </div>
    )
  }
}

export default Error;
