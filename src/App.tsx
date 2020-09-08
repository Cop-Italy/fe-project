import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import PlayerDetailPage from './components/PlayerDetailPage';
import ErrorBoundary from './components/ErrorBoundary';
import TeamDetailPage from './components/TeamDetailPage';

const App: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path="/player/:playerId">
        <PlayerDetailPage />
      </Route>
      <Route path="/teams/:teamId">
        <TeamDetailPage />
      </Route>
      <Route path="/">
        <ErrorBoundary>
          <MainPage />
        </ErrorBoundary>
      </Route>
    </Switch>
  </Router>
);

export default App;
