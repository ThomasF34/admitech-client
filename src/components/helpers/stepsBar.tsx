import React from 'react';
import '../../style/stepsBar.css';

class StepsBar extends React.Component {
  render() {
    return (
      <div className="custom-container">
        <ul className="progressbar">
          <li className="active li-custom">dossier complet</li>
          <li className="active li-custom">QCM</li>
          <li className="current li-custom">Prise de RDV entretien</li>
          <li className="li-custom">Entretien</li>
          <li className="li-custom">resultat</li>
        </ul>
      </div>
    );
  }
}

export default StepsBar;

