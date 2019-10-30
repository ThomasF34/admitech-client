import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connexion from './components/connexion';
import ContainerCard from './components/containerCard';


export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/connexion/etudiant">
            <Connexion />
          </Route>
          <Route path="/connexion/entreprise">
            <Connexion />
          </Route>
          <Route path="/">
            <ContainerCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}