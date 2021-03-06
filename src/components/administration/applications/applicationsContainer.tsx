import React, { Component } from 'react';
import ApplicationsDropdownComponent from './applicationsDropdownComponent';
import ApplicationsNavbar from './applicationsNavbar';
import ApplicationsList from './applicationsList';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/administration/applications/applicationsContainer.css';
import SingleApplication from '../../../models/administration/applications/singleApplication';
import {getAllApplications, updateStatusApplication} from "../../../services/administration/applications/application.service";
import ConfirmationPopUp from '../../helpers/ConfirmationPopUp';

interface IState {
  currentFormation: string,
  currentCategory: number,
  applications: Array<SingleApplication>,
  currentId: any
}

interface IProps {
}

class ApplicationsContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentFormation: 'Toutes',
      currentCategory: 0,
      applications: new Array<SingleApplication>(),
      currentId: null
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.changeFormation = this.changeFormation.bind(this);
    this.getApplications = this.getApplications.bind(this);
    this.getApplicationsToDisplay = this.getApplicationsToDisplay.bind(this);
    this.setCurrentId = this.setCurrentId.bind(this);
    this.getUserActionPopUp = this.getUserActionPopUp.bind(this);

    this.getApplications();
  }

  changeFormation(elem: string) {
    this.setState({ currentFormation: elem });
  }

  changeCategory(elem: number) {
    this.setState({ currentCategory: elem });
  }

  async getApplications() {
    let allApplications = await getAllApplications();

    let allApplicationsFormated = allApplications.data.map ( (elem: any) =>
      new SingleApplication(elem.id, elem.first_name + ' ' + elem.last_name, elem.branch, elem.status, elem.jury, elem.mark, elem.mcq)
    )

    this.setState({applications: allApplicationsFormated})
  }

  getApplicationsToDisplay(applications: Array<SingleApplication>): Array<SingleApplication> {
    return applications.filter( (elem: any) => 
      (elem.ETAT === this.state.currentCategory || this.state.currentCategory === 0) 
      && (elem.FORMATION === this.state.currentFormation || this.state.currentFormation === 'Toutes')  
    )
  }

  setCurrentId(elem: any) {
    this.setState({currentId: elem})
  }

  async getUserActionPopUp(elem: any) {
    if (elem === 'valid' && this.state.currentId !== null) {
      await updateStatusApplication(this.state.currentId, 11)
      let newApplications = this.state.applications.map(elem => elem.ID === this.state.currentId ? new SingleApplication(elem.ID, elem.NOM, elem.FORMATION, 11, elem.JURY, elem.NOTE, elem.QCM) : elem)
      this.setState({applications: newApplications})
      this.setState({ currentId: null })
    }
    else if (elem === 'cancel' && this.state.currentId !== null) {
      this.setState({ currentId: null })
    }
  } 

  render() {
    return (
      <div>
        <ApplicationsNavbar handleClickFormation={this.changeFormation} pressedButtonFormation={this.state.currentFormation} />
        <h6 id="total" className="card-subtitle mb-2 text-muted"> Total : {this.getApplicationsToDisplay(this.state.applications).length} </h6>
        <p className="dpdn">
          <ApplicationsDropdownComponent  handleClickCategory={this.changeCategory} />
        </p>
        <p className="list">
          <ApplicationsList formation={this.state.currentFormation} category={this.state.currentCategory} candidaturesListe={this.getApplicationsToDisplay(this.state.applications)} handleClickRefuseApplicationsList={this.setCurrentId}/>
        </p>
        <ConfirmationPopUp title='Confirmez-vous cette action ?' content="Le refus d'une candidature est irréversible." show={this.state.currentId !== null} onClose={this.getUserActionPopUp} />
      </div>
    )
  } 
}

export default ApplicationsContainer;
