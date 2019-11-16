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
        <button className="btn btn-light" onClick = {() => this.props.handleClickFormation('Toutes')}> Tous </button>
        <button className="btn btn-light" onClick = {() => this.props.handleClickFormation('DEVOPS')}> DEVOPS </button>
        <button className="btn btn-light" onClick = {() => this.props.handleClickFormation('SE')}> SE </button>
      </div>
    );
  }
}

export default ApplicationsNavbar;