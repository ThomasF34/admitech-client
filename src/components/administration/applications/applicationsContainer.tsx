import React, { Component } from 'react';
import ApplicationsDropdownComponent from './applicationsDropdownComponent';
import ApplicationsNavbar from './applicationsNavbar';
import ApplicationsList from './applicationsList';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/applications/applicationsContainer.css';
import SingleApplication from "../../../models/singleApplication";
import {getAllApplications} from "../../../services/application.service";

interface IState {
  currentFormation: string,
  currentCategory: number,
  applicationsToDisplay: Array<SingleApplication>
}

interface IProps {
}

class ApplicationsContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentFormation: 'Toutes',
      currentCategory: 0,
      applicationsToDisplay: new Array<SingleApplication>()
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.changeFormation = this.changeFormation.bind(this);
    this.getApplicationsToDisplay = this.getApplicationsToDisplay.bind(this);
  }

  changeFormation(elem: string) {
    this.setState({ currentFormation: elem });
  }

  changeCategory(elem: number) {
    this.setState({ currentCategory: elem });
  }

  async getApplicationsToDisplay() {
    let allApplications = await getAllApplications();

    let filteredApplications = allApplications.data.filter( (elem: any) => 
      (elem.status === this.state.currentCategory || this.state.currentCategory === 0) 
      && (elem.branch === this.state.currentFormation || this.state.currentFormation === 'Toutes')  
    )

    let applications = filteredApplications.map ( (elem: any) =>
      new SingleApplication(elem.first_name + ' ' + elem.last_name, elem.branch, elem.status, elem.jury, elem.mark, elem.mcq)
    )

    this.setState({applicationsToDisplay: applications})
  }

  render() {
    this.getApplicationsToDisplay()
    return (
      <div>
        <ApplicationsNavbar handleClickFormation={this.changeFormation} />
        <h6 id="total" className="card-subtitle mb-2 text-muted"> Total : {this.state.applicationsToDisplay.length} </h6>
        <p className="dpdn">
          <ApplicationsDropdownComponent  handleClickCategory={this.changeCategory} />
        </p>
        <p className="list">
          <ApplicationsList formation={this.state.currentFormation} category={this.state.currentCategory} candidaturesListe={this.state.applicationsToDisplay} />
        </p>
      </div>
    )
  } 
}

export default ApplicationsContainer;
