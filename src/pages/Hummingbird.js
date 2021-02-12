import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = ({
  sideWrapper: {
    display: 'flex'
  },
  sideLeft: {
    flex: '0 0 50%'
  },
  leftInner: {
    marginLeft: '25%',
    width: '50%'
  },
  specRow: {
    borderBottom: '1px gray solid',
    padding: '10px 0px',
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  sideRight: {
    flex: '1',
    textAlign: 'center',
    marginTop: '5%'
  }
})

class Spec extends React.Component {
  render() {
    return (
      <Typography variant="body2" className={this.props.class}>
        <span style={{textTransform: 'uppercase', fontWeight: 'bold'}}>{this.props.name}</span> <span style={{float: 'right'}}>{this.props.value}{this.props.unit}</span>
      </Typography>
    )
  }
}

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
          <div className={this.props.classes.sideWrapper}>
            <div className={this.props.classes.sideLeft}>
              <div className={this.props.classes.leftInner}>
                <Typography variant="h5">
                  Specs
                </Typography>
                <Spec class={this.props.classes.specRow} name="Thrust" value="75" unit=" N"/>
                <Spec class={this.props.classes.specRow} name="Isp" value="360" unit="s"/>
                <Spec class={this.props.classes.specRow} name="Fuel" value="GOX/Methane"/>
                <Spec class={this.props.classes.specRow} name="Cost" value="<$4000 CAD"/>
              </div>
            </div>
            <div className={this.props.classes.sideRight}>
            insert render
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(Hummingbird);
