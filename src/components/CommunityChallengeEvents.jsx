import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
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
}));

export default function CommunityChallengeEvents() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.events}>
        <Typography variant="h5" color="secondary">
          Past Events
        </Typography>
        <br />
        <Grid container spacing={2} xs={12} classes={classes.grid}>
          <Grid item>
            <Typography variant="body2" component="p" className={classes.pastPoints}>
              <span>18</span>
              <br />
              <span>JUN</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="secondary" className={classes.eventDescription}>
              <span className={classes.bold}>Course</span>
              <br />
              <span className={classes.bold}>"How to tackle food waste"</span>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.events}>
        <Typography variant="h5" color="secondary">
          Upcoming Events
        </Typography>
        <br />
        <Grid container spacing={2} xs={12} classes={classes.grid}>
          <Grid item>
            <Typography variant="body2" component="p" className={classes.points}>
              <span>30</span>
              <br />
              <span>JUN</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="secondary" className={classes.eventDescription}>
              <span className={classes.bold}>Veggie Cooking Class</span>
              <br />
              <span>
                Sign up <a href="/">here</a>
              </span>
              <br />
              <span className={classes.bold}>Only 1 spot left</span>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} xs={12}>
          <Grid item>
            <Typography variant="body2" component="p" className={classes.points}>
              <span>02</span>
              <br />
              <span>JUL</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              component="p"
              color="secondary"
              className={classes.eventDescription}
            >
              <span className={classes.bold}>Visit a BIO Farm</span>
              <br />
              <span>
                Sign up <a href="/">here</a>
              </span>
              <br />
              <span className={classes.bold}>Only 5 spots left</span>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
