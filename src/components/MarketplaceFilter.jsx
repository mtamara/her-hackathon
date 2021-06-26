import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import TrainIcon from '@material-ui/icons/Train';
import Grid from '@material-ui/core/Grid';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import SpaIcon from '@material-ui/icons/Spa';

const useStyles = makeStyles(theme => ({
  header: {
    borderBottom: '2px dotted #D83A56',
    paddingBottom: '1rem',
  },
  points: {
    backgroundColor: theme.palette.primary.main,
    width: '180px',
    padding: '1rem',
    color: theme.palette.common.white,
    borderRadius: '1rem',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
    margin: '0 auto',
  },
  search: {
    marginTop: '1rem',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.7),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.7),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  filterCat: {
    padding: '1rem',
    borderBottom: '2px dotted #D83A56',
  },
  filterIcon: {
    backgroundColor: '#C3DFA4',
    border: '1px solid #609D43',
    color: theme.palette.common.black,
    marginRight: '.5rem',
  },
  otherCat: {
    padding: '1rem',
    borderBottom: '2px dotted #D83A56',
  }
}));

export default function MarketplaceFilter() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}>
        <Typography variant="body2" component="p" className={classes.points}>
          <span>5.000</span>
          <br />
          <span>Green Points</span>
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </div>
      <div className={classes.filterCat}>
        <Typography variant="body2" component="p">
          <b>Categories</b>
        </Typography>
        <br />
        <Grid container>
          <Grid item>
            <Avatar className={classes.filterIcon}>
              <RestaurantIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar className={classes.filterIcon}>
              <TrainIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar className={classes.filterIcon}>
              <LocalFloristIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar className={classes.filterIcon}>
              <SpaIcon />
            </Avatar>
          </Grid>
        </Grid>
      </div>
      <div className={classes.otherCat}>
      <Typography variant="body2" component="p">
          <b>All vouchers</b>
        </Typography>
      </div>
      <div className={classes.otherCat}>
      <Typography variant="body2" component="p">
          <b>All benefits</b>
        </Typography>
      </div>
    </div>
  );
}
