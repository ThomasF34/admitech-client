import React, { Component } from 'react';
import AppointmentsNavbar from './appointmentsNavbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/administration/appointments/appointmentsContainer.css';

interface IState {
  currentFormation: string,
}

interface IProps {
}

class ApplicationsContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentFormation: 'do',
    };

    this.changeFormation = this.changeFormation.bind(this);
  }

  changeFormation(elem: string) {
    this.setState({ currentFormation: elem });
  }

  render() {
    return (
      <div> 
        <AppointmentsNavbar handleClickFormation={this.changeFormation} pressedButtonFormation={this.state.currentFormation} />
        
        <button type="button" className="btn btn-success" id="btn-appointments-container"> + Entretiens </button>

      </div>
    )
  } 
}

export default ApplicationsContainer;
