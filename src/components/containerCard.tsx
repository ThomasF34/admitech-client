import '../style/containerCard.css';
import React from 'react';
import student from '../img/fond-student.jpeg';
import polytech from '../img/fond-polytech.jpeg';
import company from '../img/fond-company.jpeg';
import Card from './card';


class ContainerCard extends React.Component {
  render() {
    return (


      <div className="root container-fluid fill ">
        <div className="row rowCustom align-items-center">
          <div className="col-sm-12 col-md-4 ">
            <Card title="Accès étudiants" buttonTitle="bouton" image={student} text="Voici un texte de présentation de la connexion étudiant" />
          </div>
          <div className="col-sm-12 col-md-4">
            <Card title="Accès entreprises" buttonTitle="bouton" image={company} text="Voici un texte de présentation de la connexion entreprise" />
          </div>
          <div className="col-sm-12 col-md-4">
            <Card title="Accès administration" buttonTitle="bouton" image={polytech} text="Voici un texte de présentation de la connexion admin" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerCard;

