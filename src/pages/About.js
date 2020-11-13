import React from 'react';
import {Typography, Card, CardMedia, CardContent, Grid} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles"

const useStyles = ({
  mainBody: {
    maxWidth: "40%",
    margin: "auto"
  },
  teamCont: {
    marginTop: "32px",
    marginBottom: "32px"
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
          Stellar Space Systems is dedicated to expanding in-space tranportation services. In the near future, many private space stations will grow in low-earth orbit and as in-space manufacturing grows, we will need a way to transport materials and products from station to station. We also provide components for those who want to build their own.
        </Typography>
        <Typography variant="h4" align="center">
          The Team
        </Typography>
        <div style={{overflowX: 'hidden'}}>
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
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(About);
