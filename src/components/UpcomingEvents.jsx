import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import * as ROUTES from '../constants/routes';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  buttonIcons: {
    padding: '0.5rem',
  },
  darkIconBtn: {
    backgroundColor: '#609D43',
    color: theme.palette.common.black,
    '&:hover': {
      opacity: 0.7,
      backgroundColor: '#609D43',
    },
  },
  lightIconBtn: {
    backgroundColor: '#C3DFA4',
    color: theme.palette.common.black,
    '&:hover': {
      opacity: 0.7,
      backgroundColor: '#C3DFA4',
    },
  },
  icon: {
    fontSize: 60,
  },
  events: {
    marginTop: '1rem',
    textAlign: 'left',
  },
  grid: {
    marginTop: '1rem',
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

export default function UpcomingEvents() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.buttonIcons}>
        <Button to={ROUTES.MARKETPLACE} component={RouterLink} className={classes.lightIconBtn}>
          <StorefrontIcon className={classes.icon} />
        </Button>
        &nbsp;&nbsp;
        <Button
          to={ROUTES.COMMUNITY_CHALLENGE}
          component={RouterLink}
          className={classes.darkIconBtn}
        >
          <GroupIcon className={classes.icon} />
        </Button>
      </div>
      <div>
        <Button to={ROUTES.ACHIEVEMENTS} component={RouterLink} className={classes.darkIconBtn}>
          <EmojiEventsIcon className={classes.icon} />
        </Button>
        &nbsp;&nbsp;
        <Button to={ROUTES.IMPACT} component={RouterLink} className={classes.lightIconBtn}>
          <ThumbUpAltIcon className={classes.icon} />
        </Button>
      </div>
      <div className={classes.events}>
        <Typography variant="h5" color="secondary">
          Upcoming Events
        </Typography><br />
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
            <Typography variant="body2" component="p" color="secondary" className={classes.eventDescription}>
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
