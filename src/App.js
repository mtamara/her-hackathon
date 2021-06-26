import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as ROUTES from './constants/routes';
import Header from './components/Header';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D83A56',
    },
    secondary: {
      main: '#101010',
    },
  },
});

const StartPage = lazy(() => import('./pages/StartPage'));
const MonikaPage = lazy(() => import('./pages/DashboardMonika'));
const MarketplacePage = lazy(() => import('./pages/Marketplace'));
const CommunityChallengePage = lazy(() => import('./pages/CommunityChallenge'));
const AchievementsPage = lazy(() => import('./pages/Achievements'));
const ImpactPage = lazy(() => import('./pages/Impact'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <main>
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path={ROUTES.STARTPAGE} component={StartPage} exact />
              <Route path={ROUTES.MONIKA_DASHBOARD} component={MonikaPage} />
              <Route path={ROUTES.MARKETPLACE} component={MarketplacePage} />
              <Route path={ROUTES.COMMUNITY_CHALLENGE} component={CommunityChallengePage} />
              <Route path={ROUTES.ACHIEVEMENTS} component={AchievementsPage} />
              <Route path={ROUTES.IMPACT} component={ImpactPage} />
            </Switch>
            </Suspense>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
