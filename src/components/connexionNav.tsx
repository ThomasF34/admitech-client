import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ConnexionNav extends React.Component {

  render() {
    return (

      <ul className="nav nav-tabs">
        <li className="nav-item text-center" style={{ width: '50%' }}>
          <a className="nav-link active" href="connexionn.tsx">
            <h3 style={{ color: 'black' }}>Se connecter</h3>
          </a>
        </li>
        <li className="nav-item text-center" style={{ width: '50%' }}>
          <a className="nav-link" href="connexionn.tsx">
            <h3 style={{ color: 'black' }}>Créer un compte</h3>
          </a>
        </li>
      </ul>
    );
  }
}

export default ConnexionNav;