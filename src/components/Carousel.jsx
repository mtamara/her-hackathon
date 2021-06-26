import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

const useStyles = makeStyles({
  img: {
    height: 250,
    width: 250,
    borderRadius: '50%',
  },
});

const red = '#FF616D';
const beige = '#FFEAC9';
const green = '#66DE93';

export default function AutoRotatingCarouselModal({ handleOpen, setHandleOpen, isMobile }) {
  const classes = useStyles();

  return (
    <div>
      <AutoRotatingCarousel
        label="Get started now"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        mobile={isMobile}
      >
        <Slide
          media={<img src="/assets/marketplace.jpg" className={classes.img} alt="marketplace"/>}
          mediaBackgroundStyle={{ backgroundColor: beige }}
          style={{ backgroundColor: beige }}
          title="Enjoy benefits in our sustainable marketplace"
          subtitle="Just using this will blow your mind."
        />
        <Slide
          media={<img src="/assets/fun.jpg" className={classes.img} alt="Fun with colleagues" />}
          mediaBackgroundStyle={{ backgroundColor: red }}
          style={{ backgroundColor: red }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        <Slide
          media={
            <img src="/assets/food.jpg" className={classes.img} alt="Nutrition" />
          }
          mediaBackgroundStyle={{ backgroundColor: green }}
          style={{ backgroundColor: green }}
          title="Learn more about the nutrition"
          subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
        />
      </AutoRotatingCarousel>
    </div>
  );
}
