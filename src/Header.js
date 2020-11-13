import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = ({
  header: {
    backgroundColor: 'black'
    /*boxShadow: 'none'*/
  },
  headerName: {
    color: 'white',
    textDecoration: 'none'
  },
  link: {
    padding: '0 10px',
    fontSize: '18px',
    color: 'white',
    margin: '0px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    "&:hover": {
      color: '#dedede',
      textDecoration: 'none'
    }
  },
  navCont: {
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  dropdown: {
    display: 'inline-block',
    position: 'relative',
    "&:hover $dropdownContent": {
      display: 'block'
    }
  },
  dropdownContent: {
    display: 'none',
    position: 'absolute',
    zIndex: '1',
    backgroundColor: 'black',
    paddingTop: '21px',
    minWidth: '200px',
    left: '50%',
    marginLeft: '-100px'
  },
  dropdownLink: {
    display: 'block',
    textAlign: 'center',
    padding: '16px 10px'
  }
});

class Header extends React.Component {
  render() {
    return (
      <AppBar className={this.props.classes.header}>
        <Toolbar>
          <Link to='/' className={this.props.classes.headerName}>
            <Typography variant='h6'>
              Stellar Space Systems
            </Typography>
          </Link>
          <nav className={this.props.classes.navCont}>
            {this.props.data['links'].map(({name, link, subs}) => {
              if (subs.length < 1) {
                return (
                  <Link to={link} className={this.props.classes.link}>
                    {name}
                  </Link>
                )
              }else{
                return (
                  <div className={this.props.classes.dropdown}>
                    <button style={{backgroundColor: "black", border: 'none'}} className={this.props.classes.link}>{name}</button>
                    <div className={this.props.classes.dropdownContent}>
                      {subs.map(({name, link}) => {
                        return (
                          <Link to={link} className={`${this.props.classes.link} ${this.props.classes.dropdownLink}`}>
                            {name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }
            })}
          </nav>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(useStyles)(Header);
