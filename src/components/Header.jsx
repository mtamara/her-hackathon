import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { STARTPAGE } from '../constants/routes';
import ImageAvatar from './ImageAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    justifyContent: 'space-between',
  },
  userButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.common.white,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.navbar}>
          <ImageAvatar />
          <RouterLink to={STARTPAGE}>
            <Typography variant="h6" className={classes.title}>
              EasyPeasy
            </Typography>
          </RouterLink>
          <div className={classes.userButton}>
          <Avatar alt="Remy Sharp" src="/assets/peas.png" className={classes.large} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
