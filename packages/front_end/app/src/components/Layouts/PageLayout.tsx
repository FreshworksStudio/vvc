import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Theme } from '@mui/material';
import VVCLogoSvg from '../../assets/images/vvc-logo.svg';

const useStyles = makeStyles<Theme>(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
    },
  },
  appBar: {
    position: 'relative',
  },
  logo: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(900 + parseInt(theme.spacing(3 * 2), 10))]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  avatar: {
    marginRight: theme.spacing(2)
  }
}));


const PageLayout = (props: any) => {
  const { children, hideBackButton, backButtonRoute, backButtonText } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Box className={classes.logo}>
            <img src={VVCLogoSvg} alt='Volunteer Victoria' />
          </Box>
          <Avatar className={classes.avatar}>N</Avatar>
          <Button color="primary" variant="outlined">
            post an opportunity 
          </Button>
        </Toolbar>
      </AppBar>
      
      <main className={classes.layout}>
        {!hideBackButton && 
          <Link
            component="a"
            underline='none'
            href = {backButtonRoute || '/dashboard'} 
          >
           {'<'} { backButtonText || 'Back to all opportunities'}
          </Link>
        }
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default PageLayout;