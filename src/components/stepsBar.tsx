import React from 'react';
import '../style/stepsBar.css';

class StepsBar extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="progressbar">
          <li className="active">dossier complet</li>
          <li className="active">QCM</li>
          <li className="current">Prise de RDV entretien</li>
          <li>Entretien</li>
          <li>resultat</li>
        </ul>
      </div>
    );
  }
}

export default StepsBar;

