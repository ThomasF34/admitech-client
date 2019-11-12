import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../../img/polytechLogo.svg';
import ActorNavBloc from './actorNavBloc';
import logoutIcon from '../../../img/icons/logout.png';
import { logout } from '../../../services/auth.service';
import { getUsername } from '../../../helpers/authorizationHelper';

interface IProps {
  userName: string,
  userImage: string,
  routes: Array<Array<[string, string]>>
}

class ActorNavContainer extends React.Component<IProps> {

  render() {
    return (
      <div style={{ height: '100%' }}>
        <div className="row no-gutters justify-content-md-center" style={{ backgroundColor: 'rgb(0, 204, 255)', height: '92%', padding: '5%' }}>

          {/*profile image and name*/}
          <div className="row justify-content-md-center " style={{ height: '35%' }}>
            <div className="row justify-content-md-center" style={{ padding: '5%' }}>
              <img src={this.props.userImage} className="rounded-circle img-fluid shadow-lg" style={{ width: '60%', backgroundColor: 'white' }} alt="profile" />
            </div>
            <div className="row justify-content-md-center" >
              <h4 style={{ color: 'white', paddingTop: '3%' }}>{getUsername()}</h4>
            </div>

          </div>

          {/*nav*/}
          <div className="row container justify-content-md-center" style={{ height: '65%', paddingBottom: '30%' }}>
            <ul className="nav flex-column justify-content-md-center" style={{ width: '100%' }}>
              {this.props.routes.map(bloc => <ActorNavBloc blocList={bloc} key={'keyBlock'} />)}
            </ul>
            <a href="/" style={{ textDecoration: 'none' }} onClick={() => logout()}>
              <img src={logoutIcon} className="img-icon" alt="off" />
            </a>
          </div>

        </div>

        {/*logo*/}
        <div className="row no-gutters" style={{ height: '8%' }}>
          <div className="container" style={{ width: '60%', paddingTop: '5%' }}>
            <img src={logo} className="img-fluid" alt="logo" />
          </div>
        </div>

      </div>

    );
  }
}

export default ActorNavContainer;