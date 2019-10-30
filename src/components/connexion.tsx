import React from 'react';
import '../style/connexion.css';
import ConnexionNav from './connexionNav';
import logo from '../img/polytechLogo.svg';

interface IProps {
  text: string,
  image: string
}

class Connexion extends React.Component<IProps> {
  render() {
    return (

      <div className="root fill">
        <div className="row fill no-gutters justify-content-end">
          <div className="d-none d-md-block col-md-8" >
            <div className="image-container">
              <img src={this.props.image} className="img" alt="polytech" />
              <div className="centered-text">
                <h1 className="display-1"><u>{this.props.text}</u></h1>
                <h1 className="display-4">PLATEFORME CANDIDATURE POLYTECH</h1>
              </div>
            </div>
          </div>
          <div className="customCol col-sm-12 col-md-4">
            <ConnexionNav />
            <div className="container" style={{ width: '40%', paddingTop: '10%' }}>
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
  }
}


export default Connexion;