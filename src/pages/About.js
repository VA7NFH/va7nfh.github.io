import React from 'react';
import {Typography, Card, CardContent, Grid} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles"

const useStyles = ({
  mainBody: {
    maxWidth: "40%",
    margin: "auto"
  },
  /*teamCont: {
    marginTop: "32px",
    marginBottom: "32px"
  }*/
  teamCont: {
    listStyle: 'none',
    padding: '0px',
  },
  teamItem: {
    borderBottom: "black solid 2px",
    width: "60%",
    margin: "auto",
    "&:first-child": {
      borderTop: "black solid 2px"
    }
  }
});

class About extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h4" align="center">
          About
        </Typography>
        <Typography variant="body1" align="center" className={this.props.classes.mainBody}>
          {this.props.data['abouttext']}
        </Typography>
        <Typography variant="h4" align="center">
          The Team
        </Typography>
        <div>
          <ul className={this.props.classes.teamCont}>
            {this.props.data['team'].map(({name, position}) => {
              return (
                <li className={this.props.classes.teamItem}>
                  <Typography variant="h5" align="center">
                    {name}, <span style={{fontSize: "16px"}}>{position}</span>
                  </Typography>
                </li>
              )
            })}
          </ul>
        </div>
        {/*<div style={{overflowX: 'hidden'}}>
        <Grid container justify="center" spacing="4" className={this.props.classes.teamCont}>
          {this.props.data['team'].map(({name, position, img}) => {
            return (
              <Grid item>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    {name}
                  </Typography>
                  <Typography variant="body1" align="center">
                    {position}
                  </Typography>
                </CardContent>
              </Card>
              </Grid>
            )
          })}
        </Grid>
        </div>*/}
      </div>
    );
  }
}

export default withStyles(useStyles)(About);
