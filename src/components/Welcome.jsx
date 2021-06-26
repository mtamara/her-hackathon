import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PersonCard from './PersonCard';
import { Typography } from '@material-ui/core';
import * as ROUTES from '../constants/routes';

const useStyles = makeStyles({
  root: {
    padding: '1rem',
  },
});

const demoPersonas = [
  {
    name: 'Monika',
    title: 'Sales Support',
    age: 52,
    family: 'Husband and 2 kids',
    img: '/assets/monika.jpg',
    route: ROUTES.MONIKA_DASHBOARD,
  },
  {
    name: 'Stefanie',
    title: 'Digital Marketing Manager',
    age: 28,
    family: 'In a relationship',
    img: '/assets/stefanie.jpg',
    route: ROUTES.STEFANIE_DASHBOARD,
  },
];

export default function Welcome() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Choose your journey
        </Typography>
      </Grid>
      {demoPersonas.map(persona => (
        <Grid item xs={12} md={6}>
          <PersonCard person={persona} />
        </Grid>
      ))}
    </Grid>
  );
}
