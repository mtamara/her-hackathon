import React from 'react';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckboxList from '../components/CheckboxList';
import ImpactHero from '../components/ImpactHero';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
  },
  groupIcon: {
    fontSize: 44,
  },
  events: {
    marginTop: '1rem',
    textAlign: 'left',
  },
  grid: {
    marginTop: '1rem',
  },
  pastPoints: {
    backgroundColor: '#989898',
    width: '60px',
    padding: '1rem',
    color: theme.palette.common.white,
    borderRadius: '10%',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
  },
  points: {
    backgroundColor: theme.palette.primary.main,
    width: '60px',
    padding: '1rem',
    color: theme.palette.common.white,
    borderRadius: '10%',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
  },
  eventDescription: {
    marginTop: '1rem',
  },
  bold: {
    fontWeight: 600,
  },
  eventsItem: {
    padding: '2rem !important',
    [theme.breakpoints.up('md')]: {
      borderRight: '2px dotted #D83A56',
    },
  },
  lastEventsItem: {
    padding: '2rem !important',
  },
  otherBox: {
    padding: '.5rem',
    backgroundColor: '#C3DFA4',
    borderRadius: '1rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
}));

export default function Impact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <ThumbUpAltIcon className={classes.groupIcon} />
        </Grid>
        &nbsp;
        <Typography variant="h6">IT ONLY TAKES ONE TICK TO MAKE THE WORLD A BIT MORE SUSTAINABLE</Typography>
      </Grid>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} md={4} className={classes.eventsItem}>
          <CheckboxList />
        </Grid>
        <Grid item xs={12} md={4} className={classes.eventsItem}>
        <ImpactHero />
        </Grid>
        <Grid item xs={12} md={4} className={classes.lastEventsItem}>
        <Typography variant="h6" color="secondary">
            Other categories:
          </Typography>
          <br />
          <div className={classes.otherBox}>
            <Typography style={{ fontSize: 18 }}>TRANSPORTATION</Typography>
          </div>
          <div className={classes.otherBox}>
            <Typography style={{ fontSize: 18 }}>WASTE</Typography>
          </div>
          <div className={classes.otherBox}>
            <Typography style={{ fontSize: 18 }}>WATER</Typography>
          </div>
          <div className={classes.otherBox}>
            <Typography style={{ fontSize: 18 }}>ENERGY</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
