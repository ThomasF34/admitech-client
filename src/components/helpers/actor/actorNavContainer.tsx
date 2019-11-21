import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/nav.css'
import logo from '../../../img/logo.svg'
import disconnect from '../../../img/icons/logout.png'
import { getUsername } from '../../../helpers/authorizationHelper';
import ActorNavBloc from './actorNavBloc';
import { logout } from '../../../services/auth.service';

interface IProps {
  userName: string,
  userImage: string,
  routes: Array<Array<[string, string]>>
}

interface IState{
  display: boolean;
  classDisplay: string;
}

class ActorNavContainer extends React.Component<IProps,IState> {
  constructor(props: IProps) {
    super(props);
    this.display = this.display.bind(this)
    this.state = ({
      display: false,
      classDisplay: 'navbar-light bg-light navbar-vertical hidden background'
    })
}
  
  display() {
    //If visible, set "hidden"
    if (this.state.display) {
      this.setState({
        display: false,
        classDisplay: 'navbar-light bg-light navbar-vertical hidden background'
      })
    } else {
      this.setState({
        display: true,
        classDisplay: 'navbar-light bg-light navbar-vertical show background'
      })
    }
  }


  render() {
    return (
      <nav className={this.state.classDisplay}>
        <p className="navbar-brand">Polytech Montpellier</p>
        <button className="navbar-toggler ml-auto" type="button" onClick={this.display}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <p className="small">bienvenue,</p>
        <p className="name">{getUsername()}</p>

        <ul className="navbar-nav">
          <li className="nav-item active">
            {this.props.routes.map(bloc => <ActorNavBloc blocList={bloc} key={getUsername()!} />)}
          </li>
        </ul>
        <div className='logout' onClick={() => logout()}>
          <img className=' disconnect' src={disconnect} alt='logout icon'/>
          <p className='logoutext'>Se deconnecter</p>
        </div>
        <img className="bottom-logo" alt='admitech logo' src={logo}/>
      </nav>

    );
  }
}

export default ActorNavContainer;


/** 

</div>
<div className="row container justify-content-md-center" style={{ height: '65%', paddingBottom: '30%' }}>
  <ul className="nav flex-column justify-content-md-center" style={{ width: '100%' }}>
    {this.props.routes.map(bloc => <ActorNavBloc blocList={bloc} key={getUsername()!} />)}
  </ul>
  <a href="/" style={{ textDecoration: 'none' }} onClick={() => logout()}>
    <img src={logoutIcon} className="img-icon" alt="off" />
  </a>
</div>
        </div >
  < div className = "row no-gutters" style = {{ height: '8%' }}>
    <div className="container" style={{ width: '60%', paddingTop: '5%' }}>
      <img src={logo} className="img-fluid" alt="logo" />
    </div>
        </div >

      </div >
*/