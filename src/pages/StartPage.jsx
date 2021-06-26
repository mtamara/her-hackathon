import React, {useState} from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Carousel from '../components/Carousel';
import DashboardMonika from './DashboardMonika';

export default function StartPage() {

  const [handleOpen, setHandleOpen] = useState({ open: true });
  const matches = useMediaQuery("(max-width:600px)");

  return (
      <>
      {matches && <Carousel 
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />}
      {(!matches || !handleOpen.open) && <DashboardMonika /> }
      </>
  );
}