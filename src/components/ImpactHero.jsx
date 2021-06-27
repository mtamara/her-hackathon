import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  heroItem: {
    paddingTop: '1rem',
    borderTop: '2px dotted #D83A56',
  },
  heroBox: {
    padding: '2rem',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2rem',
    textAlign: 'center',
    marginBottom: '1rem',
    color: theme.palette.common.white,
  },
  img: {
    width: '100%',
  },
  shareIcon: {
    backgroundColor: '#C3DFA4',
    border: '1px solid #609D43',
    color: theme.palette.common.black,
    marginRight: '.5rem',
  },
}));

export default function ImpactHero() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6">This week you can call yourself:</Typography>
      <br />
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.heroBox}>
            <Typography variant="h6" style={{ fontSize: 24 }}>
              "FOOD HERO"
            </Typography>
            <br />
            <div style={{ display: 'flex' }}>
              <Avatar className={classes.shareIcon}>
                <ShareIcon />
              </Avatar>
              <Typography variant="body2" style={{textAlign: 'left'}}>
                Share your individual activities with the challenge community
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.heroItem}>
          <Typography variant="h6" color="secondary">
            You have earned:
          </Typography>
          <br />
          <div className={classes.heroBox}>
            <Typography style={{ fontSize: 34 }}>20 GREEN POINTS</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
