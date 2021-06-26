import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
  },
  img: {
    width: 200,
    height: 100,
    backgroundColor: theme.palette.common.white,
    border: '2px solid #609D43',
    borderRadius: '1rem',
    padding: '1rem',
  },
  badge: {
    fontSize: 20,
    color: theme.palette.common.white,
    backgroundColor: '#609D43',
    padding: '1rem',
    width: 60,
    height: 60,
    borderRadius: '50%',
  },
  offers: {
    marginTop: '3rem',
    paddingBottom: '1rem',
    borderBottom: '2px dotted #D83A56',
    textAlign: 'center',
  },
  redeem: {
    marginTop: '3rem',
    textAlign: 'center',
  },
  redeemItem: {
    textAlign: 'center',
    padding: '3rem 1rem',
    borderRadius: '1.5rem',
    maxWidth: 200,
    border: '2px solid #609D43',
  },
  redeemImg: {
      width: 150,
      height: 100,
  },
  redeemBadge: {
    fontSize: 18,
    color: theme.palette.common.white,
    backgroundColor: '#609D43',
    padding: '1rem',
    width: '100%',
    height: 30,
    borderRadius: 0,
    marginLeft: '50%',
  }
}));

export default function Marketplace() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={2} md={3}>
          <div>test</div>
        </Grid>
        <Grid item xs={12} sm={10} md={9}>
          <Typography variant="h6">Just for you</Typography>
          <Grid container direction="row" alignItems="stretch" className={classes.offers}>
            <Grid item xs={12} sm={4}>
              <Badge
                badgeContent="15%"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                classes={{ badge: classes.badge }}
              >
                <img
                  src="/assets/marketplace_hessnatur.PNG"
                  alt="Hessnatur"
                  className={classes.img}
                />
              </Badge>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Badge
                classes={{ badge: classes.badge }}
                badgeContent="20%"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <img
                  src="/assets/marketplace_alnatura_2.png"
                  alt="Alnatura"
                  className={classes.img}
                />
              </Badge>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Badge
                badgeContent="20%"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                classes={{ badge: classes.badge }}
              >
                <img src="/assets/marketplace_weleda_1.jpg" alt="Weleda" className={classes.img} />
              </Badge>
            </Grid>
          </Grid>
          <br />
          <Typography variant="h6">Redeem your points</Typography>
          <Grid container direction="row" alignItems="stretch" className={classes.redeem}>
            <Grid item xs={12} sm={3}>
            <Badge
                classes={{ badge: classes.redeemBadge }}
                badgeContent="100.000 GP"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
              <div className={classes.redeemItem}>
                <img src="/assets/marketplace_deutsche_bahn.png" alt="DB" className={classes.redeemImg} />
                <Typography variant="h6">
                  BahnCard 100 for 1 year
                </Typography>
                <br />
              </div>
              </Badge>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Badge
                classes={{ badge: classes.redeemBadge }}
                badgeContent="10.000 GP"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
              <div className={classes.redeemItem}>
                <img src="/assets/marketplace_green_credit.png" alt="DB" className={classes.redeemImg} />
                <Typography variant="h6">
                  1 Carbon Credit<br/><br/>
                </Typography>
                <br />
              </div>
              </Badge>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Badge
                classes={{ badge: classes.redeemBadge }}
                badgeContent="5.000 GP"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
              <div className={classes.redeemItem}>
                <img src="/assets/marketplace_bio_hotels.png" alt="DB" className={classes.redeemImg} />
                <Typography variant="h6">
                  200€ voucher<br/><br/>
                </Typography>
                <br />
              </div>
              </Badge>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Badge
                classes={{ badge: classes.redeemBadge }}
                badgeContent="1.000 GP"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
              <div className={classes.redeemItem}>
                <img src="/assets/marketplace_betterplace.png" alt="DB" className={classes.redeemImg} />
                <Typography variant="h6">
                  Donate 100€<br/><br/>
                </Typography>
                <br />
              </div>
              </Badge>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div>test</div>
        </Grid>
      </Grid>
    </div>
  );
}
