import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../img/polytechLogo.svg';

class ConnexionNav extends React.Component {

  render() {
    return (
      <div>
        <ul className="nav nav-tabs ">
          <li className="nav-item text-center" style={{ width: '50%' }}>
            <button className="nav-link active" style={{ width: '100%' }}>
              <h3 style={{ color: 'black' }}>Se connecter</h3>
            </button>
          </li>
          <li className="nav-item text-center" style={{ width: '50%' }}>
            <button className="nav-link" style={{ width: '100%' }}>
              <h3 style={{ color: 'black' }}>Créer un compte</h3>
            </button>
          </li>
        </ul>
        <div className="container" style={{ width: '40%', paddingTop: '10%' }}>
          <img src={logo} className="img-fluid" alt="logo" />
        </div>
      </div>
    );
  }
}

export default ConnexionNav;