import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/applications/applicationsNavbar.css';

interface IProps {
  handleClickFormation: any
}

class ApplicationsNavbar extends React.Component<IProps> {
  render() {
    return (
      <p>
        <button id="button-navbar-applications" className="btn btn-light" onClick = {() => this.props.handleClickFormation('Toutes')}> TOUS </button>
        <button id="button-navbar-applications" className="btn btn-light" onClick = {() => this.props.handleClickFormation('DEVOPS')}> DEVOPS </button>
        <button id="button-navbar-applications" className="btn btn-light" onClick = {() => this.props.handleClickFormation('SE')}> SE </button>
      </p>
    );
  }
}

export default ApplicationsNavbar;