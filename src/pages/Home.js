import React from 'react';
import {Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = ({

});

const vehicles = [
  {

  },
  {

  }
]

const components = [

]

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
        </div>
        <div>
          <Typography variant="h4" align="center">
            Vehicles
          </Typography>
          {vehicles.map(({name, link, description}) => {
            return (
              <div className={this.props.classes.itemCont}>
                test
              </div>
            )
          })}
        </div>
        <div>
          <Typography variant="h4" align="center">
            Components
          </Typography>
          {components.map(({name, link, description}) => {
            return (
              <div>
                test
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(Home);
