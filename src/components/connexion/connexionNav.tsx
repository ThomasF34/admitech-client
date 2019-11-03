import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../img/polytechLogo.svg';

interface IState {
  isSignInActive: boolean,
  handleClickFct: (isSignInActive: boolean) => void
}

interface IProps {
  isSignInActive: boolean,
  handleClickFct: (isSignInActive: boolean) => void
}

class ConnexionNav extends React.Component<IState, IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isSignInActive: this.props.isSignInActive,
      handleClickFct: this.props.handleClickFct
    };
  }

  setSignInActive = () => {
    this.setState({ isSignInActive: true }, () => {
      this.props.handleClickFct(this.state.isSignInActive);
    }
    );

  }

  setSignInNotActive = () => {
    this.setState({ isSignInActive: false }, () => {
      this.props.handleClickFct(this.state.isSignInActive);
    }
    );

  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs ">
          <li className="nav-item text-center " style={{ width: '50%' }}>
            <button className={this.state.isSignInActive ? 'nav-link bg-light active' : 'nav-link'} style={{ width: '100%' }} onClick={() => this.setSignInActive()}>
              <h3 style={{ color: 'black' }}>Se connecter</h3>
            </button>
          </li>
          <li className="nav-item text-center" style={{ width: '50%' }}>
            <button className={this.state.isSignInActive ? 'nav-link' : 'nav-link bg-light active'} style={{ width: '100%' }} onClick={() => this.setSignInNotActive()}>
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