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
import MyApplicationPage from './components/student/myApplicationPage/myApplicationPage';
import StudentApplicationPage from './components/administration/studentApplicationPage/studentApplicationPage';
import { PrivateStudentRoute, PrivateAdminRoute, PrivateCompanyRoute } from './helpers/routesHelper';



export default function App() {

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/connexion/etudiant">
            <ConnexionContainer image={student} text="ESPACE ETUDIANT" connexionRedirectPath="/etudiant/accueil" role="student" />
          </Route>
          <Route path="/connexion/entreprise">
            <ConnexionContainer image={company} text="ESPACE ENTREPRISE" connexionRedirectPath="/entreprise/accueil" role="admin" />
          </Route>
          <Route path="/connexion/administration">
            <ConnexionContainer image={polytech} text="ESPACE ADMINISTRATION" connexionRedirectPath="/administration/accueil" role="company" />
          </Route>
          <Route path="/administration/accueil">
            {PrivateAdminRoute(<AdminHome />)}
          </Route>
          <Route path="/etudiant/accueil">
            {PrivateStudentRoute(<StudentHome />)}
          </Route>
          <Route path="/entreprise/accueil">
            {PrivateCompanyRoute(<CompanyHome />)}
          </Route>
          <Route path="/administration/candidatures">
            {PrivateAdminRoute(<ApplicationsContainer />)}
          </Route>
          <Route path="/etudiant/candidature">
            {PrivateStudentRoute(<MyApplicationPage />)}
          </Route>
          <Route path="/administration/candidature">
            {PrivateAdminRoute(<StudentApplicationPage />)}
          </Route>
          <Route path="/">
            <CardContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}