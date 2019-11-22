import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ConnexionContainer from './components/connexion/connexionContainer';
import CardContainer from './components/home/cardsContainer';
import polytech from './img/fond-polytech.jpeg';
import company from './img/fond-company.jpeg';
import student from './img/fond-student.jpeg';
import AdminHome from './components/administration/homePage/adminHome';
import StudentHome from './components/student/homePage/studentHome';
import CompanyHome from './components/company/homePage/companyHome';
import MyApplicationPage from './components/student/myApplicationPage/myApplicationPage';
import StudentApplicationPage from './components/administration/studentApplicationPage/studentApplicationPage';
import CreateApplicationContainer from './components/student/createApplicationPage/createApplicationContainer';
import ApplicationsPage from './components/administration/applications/applicationsPage';
import AppointmentsPage from './components/administration/appointments/appointmentsPage';
import CalendarPage from './components/student/calendar/calendarPage';
import { PrivateStudentRoute, PrivateAdminRoute, PrivateCompanyRoute, LoginRoute } from './helpers/routesHelper';
import WaitToken from './components/oauth2.component';
import PreviewContainer from './components/administration/mcq/mcqManagementContainer';
import CreateQCMContainer from './components/administration/mcq/createQCMContainer';
import ShowQCMView from './components/administration/mcq/showQCMView';

function App() {

  return (

    <div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Switch>
        <Route exact path="/connexion/etudiant">
          {LoginRoute(<ConnexionContainer image={student} text="ESPACE ETUDIANT" connexionRedirectPath="/etudiant/accueil" role="eleve" />)}
        </Route>
        <Route exact path="/connexion/entreprise">
          {LoginRoute(<ConnexionContainer image={company} text="ESPACE ENTREPRISE" connexionRedirectPath="/entreprise/accueil" role="entreprise" />)}
        </Route>
        <Route exact path="/connexion/administration">
          {LoginRoute(<ConnexionContainer image={polytech} text="ESPACE ADMINISTRATION" connexionRedirectPath="/administration/accueil" role="administration" />)}
        </Route>
        <Route exact path="/administration/accueil">
          {PrivateAdminRoute(<AdminHome />)}
        </Route>
        <Route exact path="/administration/entretiens">
          {PrivateAdminRoute(<AppointmentsPage />)}
        </Route>
        <Route exact path="/etudiant/accueil">
          {PrivateStudentRoute(<StudentHome />)}
        </Route>
        <Route exact path="/entreprise/accueil">
          {PrivateCompanyRoute(<CompanyHome />)}
        </Route>
        <Route exact path="/administration/candidatures">
          {PrivateAdminRoute(<ApplicationsPage />)}
        </Route>
        <Route exact path="/etudiant/candidature/:id">
          {PrivateStudentRoute(<MyApplicationPage />)}
        </Route>
        <Route exact path="/administration/candidature/:id">
          {PrivateAdminRoute(<StudentApplicationPage />)}
        </Route>
        <Route path="/etudiant/calendrier/:idApplication">
          {PrivateStudentRoute(<CalendarPage />)}
        </Route>

        <Route exact path="/administration/qcm">
          {PrivateAdminRoute(<PreviewContainer />)}
        </Route>

        <Route exact path="/administration/qcm/nouveau">
          {PrivateAdminRoute(<CreateQCMContainer />)}
        </Route>

        <Route exact path="/administration/qcm/voir/:id">
          {PrivateAdminRoute(<ShowQCMView />)}
        </Route>

        <Route exact path="/etudiant/candidature">
          {PrivateStudentRoute(<CreateApplicationContainer />)}
        </Route>

        <Route exact path="/oauth">
          <WaitToken />
        </Route>
        <Route path="/">
          <CardContainer />
        </Route>


      </Switch>
    </div>
  );
}

export default withRouter(App);