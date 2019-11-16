import React, { Component } from 'react';
import ApplicationsDropdownComponent from './applicationsDropdownComponent';
import ApplicationsNavbar from './applicationsNavbar';
import ApplicationsList from './applicationsList';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/applications/applicationsPage.css';
import SingleApplication from "../../../models/singleApplication";

const eleve1 = new SingleApplication(
  "Joe DOE",
  "SE",
  4,
  ['Paul Durand', 'Lucas Dupont', 'Charles Despres'],
  14,
  "ID10"
)

const eleve2 = new SingleApplication(
  "Juliette MARIN",
  "DEVOPS",
  8,
  ["Corinne", "Arnaud", "Vincent"],
  10,
  "ID9"
)

const eleve3 = new SingleApplication(
  "Martin DUMAS",
  "SE",
  2,
  ["Paul Durand", "Lucas Dupont", "Charles Despres"],
  17,
  "ID10"
)

const listes=[eleve1, eleve2, eleve3]

interface IState {
  currentFormation: string,
  currentCategory: number
}

interface IProps {
}

class ApplicationsContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
      this.state = {
        currentFormation: 'Toutes',
        currentCategory: 0,
      };
      this.changeCategory = this.changeCategory.bind(this);
      this.changeFormation = this.changeFormation.bind(this);
      this.getTotal = this.getTotal.bind(this);
  }

  changeFormation(elem: string) {
    this.setState({ currentFormation: elem });
  }

  changeCategory(elem: number) {
    this.setState({ currentCategory: elem });
  }

  getTotal(listes: any) {
    const newListes = listes.filter((elem: { ETAT: number; FORMATION: string; }) => 
      (elem.ETAT === this.state.currentCategory || this.state.currentCategory === 0) 
        && (elem.FORMATION === this.state.currentFormation || this.state.currentFormation === 'Toutes')
    )
    return newListes.length
  }

  render() {
      return (
        <div>
          <ApplicationsNavbar handleClickFormation={this.changeFormation} />
          <h6 id="total" className="card-subtitle mb-2 text-muted"> Total : {this.getTotal(listes)} </h6>
          <p className="dpdn">
            <ApplicationsDropdownComponent  handleClickCategory={this.changeCategory} />
          </p>
          <p className="list">
            <ApplicationsList formation={this.state.currentFormation} category={this.state.currentCategory} candidaturesListe={listes} />
          </p>
        </div>
      )
  } 
}

export default ApplicationsContainer;