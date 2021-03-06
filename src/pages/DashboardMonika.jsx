import React from 'react';
import YourChallenge from '../components/YourChallenge';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UpcomingEvents from '../components/UpcomingEvents';
import EcoWarrior from '../components/EcoWarrior';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  points: {
    backgroundColor: theme.palette.primary.main,
    width: '90px',
    padding: '1rem',
    color: theme.palette.common.white,
    borderRadius: '10%',
    margin: '0.5rem auto',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  firstGridItem: {
    justifyContent: 'space-around',
  },
  pointsItem: {
    textAlign: 'center',
    alignSelf: 'center',
  }
}));

export default function DashboardMonika() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Grid
              container
              spacing={2}
              direction="row"
              alignItems="stretch"
              className={classes.firstGridItem}
            >
              <Grid item xs={12} sm={8}>
                <YourChallenge />
              </Grid>
              <Grid item xs={12} sm={4} className={classes.pointsItem}>
                  <Typography component="h2" variant="h5" color="secondary">
                    Your Points
                  </Typography><br />
                  <Typography variant="body2" className={classes.points} color="secondary">
                    <span>5.000</span>
                    <br />
                    <span>green</span>
                    <br />
                    <span>points</span>
                  </Typography>
                  <Typography variant="h6" color="secondary">
                    +3.000 coming up!
                  </Typography>
              </Grid>
              <Grid item xs={12}>
              <EcoWarrior />
          </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <UpcomingEvents />
            </Paper>
          </Grid>
        </Grid>
      </div>
      
    </>
  );
}
