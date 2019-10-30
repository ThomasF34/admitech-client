import '../style/cardsContainer.css';
import React from 'react';
import student from '../img/fond-student.jpeg';
import polytech from '../img/fond-polytech.jpeg';
import company from '../img/fond-company.jpeg';
import Card from './card';


class CardContainer extends React.Component {
  render() {
    return (


      <div className="root container-fluid fill ">
        <div className="row rowCustom align-items-center">
          <div className="col-sm-12 col-md-4 ">
            <Card title="Accès étudiants" clickLink="/connexion/etudiant" image={student} text="Voici un texte de présentation de la connexion étudiant" />
          </div>
          <div className="col-sm-12 col-md-4">
            <Card title="Accès entreprises" clickLink="/connexion/entreprise" image={company} text="Voici un texte de présentation de la connexion entreprise" />
          </div>
          <div className="col-sm-12 col-md-4">
            <Card title="Accès administration" clickLink="/connexion/administration" image={polytech} text="Voici un texte de présentation de la connexion admin" />
          </div>
        </div>
      </div>
    );
  }
}

export default CardContainer;

