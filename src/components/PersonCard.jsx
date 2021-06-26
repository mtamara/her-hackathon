import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 180,
  },
});

export default function PersonCard({person}) {
  const classes = useStyles();
  console.log({person});

  return (
        <CardActionArea to={person.route} component={RouterLink}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={person.img} title={person.name} />
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {person.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {person.title}
                </Typography>
                <Typography variant="subtitle1">
                  {person.age} years
                </Typography>
                <Typography variant="subtitle1">
                  {person.family}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </CardActionArea>
  );
}
