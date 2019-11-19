import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/applications/applicationsNavbar.css';

interface IProps {
  handleClickFormation: any
}

class ApplicationsNavbar extends React.Component<IProps> {
  render() {
    return (
      <div>
        <button id="button-navbar-applications" className="btn btn-light" onClick = {() => this.props.handleClickFormation('Toutes')}> TOUS </button>
        <button id="button-navbar-applications" className="btn btn-light" onClick = {() => this.props.handleClickFormation('do')}> DEVOPS </button>
        <button id="button-navbar-applications" className="btn btn-light" onClick = {() => this.props.handleClickFormation('se')}> SE </button>
      </div>
    );
  }
}

export default ApplicationsNavbar;