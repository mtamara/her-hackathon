import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CustomCard from './CustomCard';

const useStyles = makeStyles({
    root: {
      padding: '1rem',
      maxWidth: '100%',
    },
  });

const productsArray = [
    {
        name: 'Product1',
        img: '/assets/food.jpg',
    },
    {
        name: 'Product2',
        img: '/assets/fun.jpg',
    },
    {
        name: 'Product3',
        img: '/assets/marketplace.jpg',
    }
]

export default function CardContainer() {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root}>
            {productsArray.map(product => (
                <Grid item>
                    <CustomCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}