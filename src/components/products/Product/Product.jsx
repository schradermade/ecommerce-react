import React from 'react';
//These are named imports, so all have to be named exact
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={ classes.root }>
      <CardMedia className={ classes.media } image='' title={ product.name }/>
      <CardContent>
        <div className={ classes.cardContent }>
          <Typography variant='h5' gutterBottom>
            { product.name }
          </Typography>
          <Typography variant='h5'>
            { product.price }
          </Typography>
        </div>
        <Typography variant='h2' color='textSecondary'>{ product.description }</Typography>
        <CardActions disableSpacing className={ classes.cardActions }>
          <IconButton aria-label='Add to Card'>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardContent>

    </Card>
  )
}

export default Product;
