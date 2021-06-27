import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CheckboxList from '../components/CheckboxList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bold: {
    fontWeight: 600,
    paddingBottom: '.5rem',
  },
  lightIconBtn: {
    backgroundColor: '#FFEAC9',
  },
  icon: {
    fontSize: 60,
  },
  points: {
    backgroundColor: 'white',
    width: '90px',
    padding: '1rem',
    color: theme.palette.common.white,
    margin: '0.5rem auto',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  }
}));

export default function Impact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Typography variant="h5" className={classes.bold}>
          SMALL STEPS - HUGE IMPACT
        </Typography>
        <Button className={classes.lightIconBtn}>
          <ThumbUpAltIcon className={classes.icon} />
          <Typography variant="h5" className={classes.bold}>
            IT ONLY TAKES ONE TICK TO MAKE THE WORLD A BIT MORE SUSTAINABLE
          </Typography>
        </Button>
        <Grid item xs={5} sm={6} className={classes.points}>
          <Typography component="h2" variant="h5" color="secondary">
            Fight Food Waste
          </Typography>
          <Typography component="h2" variant="h5" color="secondary">
          </Typography><br />
          <CheckboxList>

          </CheckboxList>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>

      </Grid>
    </div>
  );
}







