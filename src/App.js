import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Carousel from './components/Carousel';
import CardContainer from './components/CardContainer';

import './App.css';

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
      <Router>
      <Container maxWidth="lg" disableGutters>
      <Header />
      <Carousel 
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
      {!handleOpen.open && <CardContainer /> }
      </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;