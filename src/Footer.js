import React from 'react';
import { Typography, Link } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = ({
  footer: {
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    height: '64px'
  },
  copyright: {
    float: 'left',
    marginLeft: '100px',
    marginTop: '22px'
  },
  social: {
    float: 'right',
    marginRight: '100px',
    marginTop: '20px'
  },
  icon: {
    fontSize: '24px',
    color: 'white',
    paddingLeft: '10px',
    "&:hover": {
      color: '#dedede'
    }
  }
});

class Footer extends React.Component {
  render() {
    return (
      <div className={this.props.classes.footer}>
        <div className={this.props.classes.copyright}>
          <Typography variant="paragraph">
            &copy; {new Date().getFullYear()} Stellar Space Systems
          </Typography>
        </div>
        <div className={this.props.classes.social}>
          {this.props.data['socials'].map(({link, icon}) => {
            return (
              <Link naked href={link} target="_blank">
                <FontAwesomeIcon icon={icon} className={this.props.classes.icon}/>
              </Link>
            )
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Footer);
