import React from 'react';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/Group';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CommunityChallengeEvents from '../components/CommunityChallengeEvents';
import Feed from '../components/Feed';
import Inspiration from '../components/Inspiration';

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
}));

export default function CommunityChallenge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <GroupIcon className={classes.groupIcon} />
        </Grid>
        &nbsp;
        <Typography variant="h6">ONGOING CHALLENGE: VEGGIE &amp; NO FOOD WASTE</Typography>
      </Grid>
      <Grid container spacing={2} alignItems="stretch" className={classes.feed}>
        <Grid item xs={12} md={3} className={classes.eventsItem}>
          <CommunityChallengeEvents />
        </Grid>
        <Grid item xs={12} md={6} className={classes.eventsItem}>
          <Feed />
        </Grid>
        <Grid item xs={12} md={3} className={classes.lastEventsItem}>
          <Inspiration />
        </Grid>
      </Grid>
    </div>
  );
}
