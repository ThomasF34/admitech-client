import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/administration/appointments/appointmentsNavbar.css';

interface IProps {
  handleClickFormation: any,
  pressedButtonFormation: string
}

class AppointmentsNavbar extends React.Component<IProps> {
  render() {
    return (
      <div>
        <button id={this.props.pressedButtonFormation === 'do' ? "pressed-button-navbar-applications" : "button-navbar-applications"} className="btn btn-outline-secondary" onClick = {() => this.props.handleClickFormation('do')}> DEVOPS </button>
        <button id={this.props.pressedButtonFormation === 'se' ? "pressed-button-navbar-applications" : "button-navbar-applications"} className="btn btn-outline-secondary" onClick = {() => this.props.handleClickFormation('se')}> SE </button>
      </div>
    );
  }
}

export default AppointmentsNavbar;