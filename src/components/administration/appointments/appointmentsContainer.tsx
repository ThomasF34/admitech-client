import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/administration/appointments/appointmentsContainer.css';
import AppointmentsNavbar from './appointmentsNavbar';
import {addSlots} from '../../../services/administration/appointments/application.service';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

interface IState {
  currentFormation: string,
  showModal: boolean,
  startDateForm: string,
  endDateForm: string,
  durationForm: string,
}

interface IProps {
}

class AppointmentsContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentFormation: 'do',
      showModal: false,
      startDateForm: '',
      endDateForm: '',
      durationForm: '0.5',
    };

    this.changeFormation = this.changeFormation.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  changeFormation(elem: string) {
    this.setState({ currentFormation: elem });
  }

  async handleSave() {
    this.setState({showModal: false})
    await addSlots(this.state.currentFormation, this.state.startDateForm, this.state.endDateForm, this.state.durationForm) 
    //TODO requete post
  }

  render() {
    return (
      <div> 
        <AppointmentsNavbar handleClickFormation={this.changeFormation} pressedButtonFormation={this.state.currentFormation} />
        
        
        <div>
            <Button onClick={() => this.setState({showModal: true})} className="btn btn-success" id="btn-appointments-container"> + Entretiens </Button>

            <Modal
                show={this.state.showModal}
                onHide={() => this.setState({showModal: false})}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title"> Créer des créneaux d'entretiens pour la formation {this.state.currentFormation === 'do' ? 'DEVOPS' : 'SE'} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label> Date début des entretiens </label>
                            <input type="date" className="form-control" name="dateStart" id="dateStart" required onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {this.setState({startDateForm: event.target.value})} }/>
                            {this.state.startDateForm === '' ? <span id="span-error"> Le champ ne doit pas être nul </span> : null}
                        </div>
                        <div className="form-group">
                            <label> Date fin des entretiens </label>
                            <input type="date" className="form-control" name="dateEnd" id="dateEnd" required onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {this.setState({endDateForm: event.target.value})} }/>
                            {this.state.endDateForm === '' ? <span id="span-error"> Le champ ne doit pas être nul </span> : null}
                            {new Date(this.state.startDateForm) > new Date(this.state.endDateForm) ? <span id="span-error"> La date de début est plus grande que la date de fin </span> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1"> Durée d'un entretien </label>
                            <select className="form-control" id="exampleFormControlSelect1" name="duration" required onChange={ (event: React.ChangeEvent<HTMLSelectElement>) => {this.setState({durationForm: event.target.value})} }>
                                <option value='0.5'> 30minutes </option>
                                <option value='0.75'> 45minutes </option>
                                <option value='1'> 1heure </option>
                            </select>
                        </div>
                        <Modal.Footer>
                            <Button variant="danger" onClick={()=>this.setState({showModal: false})}> Annuler </Button>
                            <Button variant="success" onClick={()=>
                                (this.state.startDateForm !== '' && this.state.endDateForm !== '' && new Date(this.state.startDateForm) < new Date(this.state.endDateForm)) 
                                ? (
                                    this.handleSave()
                                )
                                : (console.log("Error")
                                ) 
                            }> Enregistrer </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>

            </Modal>
        </div>

      </div>
    )
  } 
}

export default AppointmentsContainer;
