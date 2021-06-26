import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as ROUTES from './constants/routes';
import Header from './components/Header';

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

const Startpage = lazy(() => import('./pages/StartPage'));
const Monikapage = lazy(() => import('./pages/DashboardMonika'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <main>
          <Container maxWidth="lg" disableGutters>
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path={ROUTES.STARTPAGE} component={Startpage} exact />
              <Route path={ROUTES.MONIKA_DASHBOARD} component={Monikapage} />
            </Switch>
            </Suspense>
          </Container>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
