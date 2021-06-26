import React, {useState} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header from './components/Header';
import Carousel from './components/Carousel';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D83A56',
    },
    secondary: {
      main: '#9cd8bd',
    },
  },
});

function App() {

  const [handleOpen, setHandleOpen] = useState({ open: true });
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Carousel 
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </ThemeProvider>
  );
}

export default App;