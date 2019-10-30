import React from 'react';
import '../style/connexion.css';
import ConnexionNav from './connexionNav';
import polytech from '../img/fond-polytech.jpeg';
import logo from '../img/polytechLogo.svg'

const Connexion: React.FC = () => {
  return (

    <div className="root fill">
      <div className="row fill no-gutters justify-content-end">
        <div className="col-md-8">
          <img src={polytech} className="img-fluid" alt="polytech" />
        </div>
        <div className="customCol col-sm-12 col-md-4">
          <ConnexionNav />
          <div className="container" style={{width:'40%', paddingTop:'10%'}}>
            <img src={logo} className="img-fluid" alt="logo" />
          </div>
          <div className="container-title">
            <div className="name-mainTitle">test</div>
            <div className="decor">
              <div className="decor-line">
              </div>
            </div>
          </div>
          <span className='content'>test1</span>

        </div>
      </div>
    </div>

  );
};

export default Connexion;