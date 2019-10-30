import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connexion from './components/connexion';
import ContainerCard from './components/containerCard';
import polytech from './img/fond-polytech.jpeg';
import company from './img/fond-company.jpeg';
import student from './img/fond-student.jpeg';


export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/connexion/etudiant">
            <Connexion image={student} text="ESPACE ETUDIANT"/>
          </Route>
          <Route path="/connexion/entreprise">
            <Connexion image={company} text="ESPACE ENTREPRISE"/>
          </Route>
          <Route path="/connexion/administration">
            <Connexion image={polytech} text="ESPACE ADMINISTRATION"/>
          </Route>
          <Route path="/">
            <ContainerCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}