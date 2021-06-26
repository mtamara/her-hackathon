import React, {useState} from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Carousel from '../components/Carousel';
import Welcome from '../components/Welcome';

export default function StartPage() {

  const [handleOpen, setHandleOpen] = useState({ open: true });
  const matches = useMediaQuery("(max-width:600px)");

  return (
      <>
      <Carousel 
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
      {!handleOpen.open && <Welcome /> }
      </>
  );
}