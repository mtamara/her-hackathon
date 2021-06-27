import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  inspirationBox: {
    padding: '2rem',
    backgroundColor: '#C3DFA4',
    borderRadius: '10%',
    textAlign: 'center',
    marginBottom: '.5rem',
  },
  img: {
    width: '100%',
  },
});

export default function Inspiration() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" color="secondary">
        Inspiration
      </Typography>
      <br />
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.inspirationBox}>
            <Typography variant="h6" color="secondary">
              - Veggie Recipes -
            </Typography>
            <br />
            <img src="/assets/community_challenge_1.jpg" alt="Meal plan" className={classes.img} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.inspirationBox}>
            <Typography variant="h6" color="secondary">
              - Tips to avoid food waiste -
            </Typography>
            <br />
            <img
              src="/assets/community_challenge_2.jpg"
              alt="Avoid food waiste"
              className={classes.img}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
