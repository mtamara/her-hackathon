import Typography from '@material-ui/core/Typography';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import { makeStyles } from '@material-ui/core/styles';
import OpacityIcon from '@material-ui/icons/Opacity';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles({
  root: {
    padding: '1rem',
  },
  bold: {
    fontWeight: 600,
    paddingBottom: '.5rem',
  },
  achievement: {
    backgroundColor: '#C3DFA4',
    textAlign: 'center',
    padding: '5rem 1rem',
    borderRadius: '1.5rem',
    maxWidth: 250,
  },
  icon: {
    fontSize: 150,
  },
});

export default function Achievements() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.bold}>
        You can be proud! Your actions have an impact.
      </Typography>
      <br />
      <Typography variant="h5" className={classes.bold}>
        ECO-HALL OF FAME:
      </Typography>
      <Grid container spacing={2} direction="row" alignItems="stretch">
        <Grid item xs={12} md={4}>
          <div className={classes.achievement}>
            <LocalActivityIcon className={classes.icon} />
            <Typography variant="h6">
                You have saved <b>25€</b> shopping in our Marketplace
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.achievement}>
            <OpacityIcon className={classes.icon} />
            <Typography variant="h6">
                Your actions have saved <b>37.389 L</b> of water
            </Typography><br />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.achievement}>
            <WhatshotIcon className={classes.icon} />
            <Typography variant="h6">
                You have been in your challenge for <b>2 months</b>. Don't give up!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
