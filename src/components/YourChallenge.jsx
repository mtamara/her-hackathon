import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    backgroundColor: 'inherit',
    padding: '1rem',
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      borderRight: '2px dotted #D83A56',
    },
    [theme.breakpoints.down('sm')]: {
      borderBottom: '2px dotted #D83A56',
    },
  },
  cardDetails: {
    flex: 1,
  },
  imgItem: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  img: {
    width: 150,
    backgroundSize: 'contain',
  },
}));

export default function YourChallenge() {
  const classes = useStyles();

  return (
          <Card className={classes.card} square>
              <Grid container>
                <Grid item xs={12}>
                <Typography component="h2" variant="h5">Your Challenge</Typography><br />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.imgItem}>
                <img src="/assets/veggiedish.jpg" alt="veggie dish" className={classes.img}/>
                </Grid>
                <Grid item xs={12} sm={8}>
                <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  <b>3 months vegetarian diet &amp; no food waste</b>
                </Typography><br />
                <Typography variant="subtitle1">
                  <a href="/"><b>See more</b></a>
                </Typography><br/>
                <Typography variant="subtitle1">
                  <WhatshotIcon /> ONLY 15 DAYS LEFT
                </Typography>
              </CardContent>
            </div>
                </Grid>
              </Grid>
          </Card>
  );
}
