import React from 'react';
import ChallengesList from '../components/ChallengesList';
import Buttons from '../components/Buttons';
import Avatar from '../components/ImageAvatar';
import YourChallenge from '../components/YourChallenge';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { white } from 'color-name';
import { auto } from 'async';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  points: {
    backgroundColor: '#DE666A',
    width: '60px',
    padding: '1rem',
    color: theme.palette.common.white,
    borderRadius: '10%',
    margin: '0.5rem auto',
  }
}));

export default function DashboardMonika() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}><ChallengesList /></Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper className={classes.paper}><Typography variant="h4" component="h2">
              Your Points
            </Typography>
              <Typography variant="p" component="p" className={classes.points}>
                5.000 <br />
                green <br />
                points
              </Typography>
              <Typography>
                +3.000 coming up!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
      <YourChallenge />
      <Buttons />
    </>);

}