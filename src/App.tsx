import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConnexionContainer from './components/connexion/connexionContainer';
import CardContainer from './components/home/cardsContainer';
import polytech from './img/fond-polytech.jpeg';
import company from './img/fond-company.jpeg';
import student from './img/fond-student.jpeg';
import AdminHome from './components/administration/adminHome';
import StudentHome from './components/student/studentHome';
import CompanyHome from './components/company/companyHome';



export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/connexion/etudiant">
            <ConnexionContainer image={student} text="ESPACE ETUDIANT"/>
          </Route>
          <Route path="/connexion/entreprise">
            <ConnexionContainer image={company} text="ESPACE ENTREPRISE"/>
          </Route>
          <Route path="/connexion/administration">
            <ConnexionContainer image={polytech} text="ESPACE ADMINISTRATION"/>
          </Route>
          <Route path="/administration/home">
            <AdminHome />
          </Route>
          <Route path="/student/home">
            <StudentHome />
          </Route>
          <Route path="/company/home">
            <CompanyHome />
          </Route>
          <Route path="/">
            <CardContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}