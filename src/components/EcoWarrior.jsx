import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    backgroundColor: 'inherit',
    padding: '1rem',
    boxShadow: 'none',
    borderTop: '2px dotted #D83A56',
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
});

export default function EcoWarrior() {
  const classes = useStyles();

  return (
          <Card className={classes.card} square>
              <Grid container>
                <Grid item xs={12} sm={3} className={classes.imgItem}>
                <img src="/assets/circle-cropped.png" alt="eco warrior" className={classes.img}/>
                </Grid>
                <Grid item xs={12} sm={7}>
                <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  Eco-warrior of the month
                </Typography><br />
                <Typography variant="subtitle1">
                  Karen Becker, CFO
                </Typography>
                <Typography variant="subtitle1">
                   Actively participating in the Veggie Challenge!
                </Typography>
                <br />
                <Typography variant="subtitle1">
                  <CalendarTodayIcon /> Ask Karen on 1<sup>st</sup> of July. Register <a href="/"><b>here!</b></a>
                </Typography>
              </CardContent>
            </div>
                </Grid>
              </Grid>
          </Card>
  );
}
