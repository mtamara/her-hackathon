import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 300,
    },
});

export default function CustomCard({product}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
                <CardActionArea to="product1" component={RouterLink}>
                <CardMedia
                    component="img"
                    alt="test"
                    height="160"
                    image={product.img}
                    title={product.name}
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {product.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button to={'/'} component={RouterLink} color="primary"><AddShoppingCartIcon /></Button>
            </CardActions>
        </Card>
    );
};