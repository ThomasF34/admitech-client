import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class BottomBar extends React.Component {

  render() {
    return (

      <div className="fill-container shadow-lg white">
        <p className="vertical-center" >Pour toute requête, merci de contacter
          <a href="help@polytech-montpellier.fr"> help@polytech-montpellier.fr </a>
          ou par téléphone au 01.23.45.67.89. </p>
      </div>

    );
  }
}

export default BottomBar;