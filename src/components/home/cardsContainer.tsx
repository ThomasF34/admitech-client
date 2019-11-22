import '../../style/container.css';
import React from 'react';
import student from '../../img/fond-student.jpeg';
import polytech from '../../img/fond-polytech.jpeg';
import company from '../../img/fond-company.jpeg';
import Card from './card';
import { authURL} from '../../services/oauth2.service';
import { isAdmin } from '../../helpers/authorizationHelper';



class CardContainer extends React.Component {
  render() {
    return (


      <div className="root container-fluid fill" style = {{backgroundColor:'rgb(51, 96, 138)'}}>
        <div className="row fill align-items-center">
          <div className="col-sm-12 col-md-4 ">
            <Card title="Accès étudiants" isAdminLink={false} clickLink="/etudiant/accueil" image={student} text="Voici un texte de présentation de la connexion étudiant" />
          </div>
          <div className="col-sm-12 col-md-4">
            <Card title="Accès entreprises" isAdminLink={false}  clickLink="/entreprise/accueil" image={company} text="Voici un texte de présentation de la connexion entreprise" />
          </div>
          <div className="col-sm-12 col-md-4">
            <Card title="Accès administration" isAdminLink={true}  clickLink={(isAdmin() )? ('/administration/accueil') :(authURL())} image={polytech} text="Voici un texte de présentation de la connexion admin" />
          </div>
        </div>
      </div>
    );
  }
}

export default CardContainer;

