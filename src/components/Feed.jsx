import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { purple } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  root: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: purple[500],
  },
});

export default function Feed() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" color="secondary">
        Feed
      </Typography><br/>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              BS
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Bill Smith"
          subheader="June 14, 2021"
        />
        <CardMedia
          className={classes.media}
          image="/assets/community_challenge_3.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Just tried the vegetarian spring rolls. AWESOME!!
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              MM
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Melinda Müller"
          subheader="June 24, 2021"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Have you already heard of the App "OLIO"? Fight food waste - sharing is caring!
            Try it our: <a href="https://olioex.com/">https://olioex.com/</a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
