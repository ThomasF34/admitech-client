import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConnexionContainer from './components/connexion/connexionContainer';
import CardContainer from './components/home/cardsContainer';
import polytech from './img/fond-polytech.jpeg';
import company from './img/fond-company.jpeg';
import student from './img/fond-student.jpeg';
import AdminHome from './components/administration/homePage/adminHome';
import StudentHome from './components/student/homePage/studentHome';
import CompanyHome from './components/company/homePage/companyHome';
import ApplicationsContainer from './components/administration/applicationsPage/applicationsContainer';
import MyApplicationContainer from './components/student/myApplicationPage/myApplicationContainer';



export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/connexion/etudiant">
            <ConnexionContainer image={student} text="ESPACE ETUDIANT" />
          </Route>
          <Route path="/connexion/entreprise">
            <ConnexionContainer image={company} text="ESPACE ENTREPRISE" />
          </Route>
          <Route path="/connexion/administration">
            <ConnexionContainer image={polytech} text="ESPACE ADMINISTRATION" />
          </Route>
          <Route path="/administration/accueil">
            <AdminHome />
          </Route>
          <Route path="/etudiant/accueil">
            <StudentHome />
          </Route>
          <Route path="/entreprise/accueil">
            <CompanyHome />
          </Route>
          <Route path="/administration/candidatures">
            <ApplicationsContainer />
          </Route>
          <Route path="/etudiant/candidature">
            <MyApplicationContainer />
          </Route>
          <Route path="/">
            <CardContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}