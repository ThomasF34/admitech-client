import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Experiences } from '../../../models/application/application';
import '../../../style/fileManaging.css';

interface IProps {
  experiences: Array<Experiences>,
  handleChangeExperiences: (elems: Experiences[]) => void,
  isDisplayedBlock: boolean,
  editMode: boolean
}
interface IState {
  yearsExperiences: Array<string>,
  valuesExperience: IFields,
  errors: IFields,
  experiences: Array<Experiences>,
  experienceCanBeSummited: boolean
}

interface IFields {
  [key: string]: any;
}

class ScolarityForm extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      yearsExperiences: this.generateYears(),
      valuesExperience: {
        facility_name: '',
        facility_place: '',
        name: '',
        mean: '',
        ranking: '',
        year: '',
        degree: '',
        rating: ''
      },
      errors: {},
      experienceCanBeSummited: false,
      experiences: this.props.experiences
    }
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.experiences !== prevProps.experiences) {
      this.setState({
        experiences: this.props.experiences
      });
    }
  }

  generateYears = (): string[] => {
    const currentYear: number = new Date().getFullYear();
    let tabOfYears: string[] = [];
    for (let i = currentYear - 5; i < currentYear; i++) {
      tabOfYears.push(`${i}/${i + 1}`);
    }
    return tabOfYears;
  }

  updateYears = (valueYear: string, action: string) => {
    if (action === 'add') { //delete experience and re-add the year in the tab
      this.setState(previousState => ({
        yearsExperiences: [...previousState.yearsExperiences, valueYear]
      }));
    } else {// action === 'delete' //add experience and delete the year in the tab
      const newList = this.state.yearsExperiences.filter(function (year) {
        return year !== valueYear;
      });
      this.setState({
        yearsExperiences: newList
      });
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
    if (event.target != null) {
      const newValues = this.state.valuesExperience;
      const field: string = event.target.name;
      const value: string = event.target.value;
      newValues[field] = value;
      this.setState({
        valuesExperience: newValues
      });
    }
  }

  checkSubmitAvailability = () => {
    let submitAvailable = true;
    Object.values(this.state.valuesExperience).forEach((value: string) => {
      if (value === '') {
        submitAvailable = false;
      }
    });
    this.setState({ experienceCanBeSummited: submitAvailable });
  }

  handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const newExperience = new Experiences(this.state.valuesExperience.degree, this.state.valuesExperience.facility_name
      , this.state.valuesExperience.facility_place, this.state.valuesExperience.mean, this.state.valuesExperience.name, this.state.valuesExperience.ranking
      , this.state.valuesExperience.rating, this.state.valuesExperience.year);

    this.setState(previousState => ({
      experiences: [...previousState.experiences, newExperience],
      valuesExperience: {
        facility_name: '',
        facility_place: '',
        name: '',
        mean: '',
        ranking: '',
        year: '',
        degree: '',
        rating: ''
      },
      experienceCanBeSummited: false
    }));
    this.updateYears(this.state.valuesExperience.year, 'delete');
  }

  convertRating = (rating: string): string => {
    const ratings = ['Aucune', 'Assez Bien', 'Bien', 'Très bien', 'Féliciations du Jury'];
    return ratings[parseInt(rating)];
  }
  convertDegree = (degree: boolean): string => {
    if (degree) {
      return 'Oui'
    } else { return 'Non' }
  }

  resetListOfYears = (year: string) => {
    this.setState(previousState => ({
      yearsExperiences: [...previousState.yearsExperiences, year]
    }));
  }

  removeElemFromExperiences = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, experience: Experiences) => {
    event.preventDefault();

    const listAdded = this.state.experiences;
    const newList = listAdded.filter(function (elem) {
      return elem.year !== experience.year;
    });
    this.setState({
      experiences: newList
    });
    this.props.handleChangeExperiences(newList);
    this.resetListOfYears(experience.year!);
  }

  render() {
    const years = this.state.yearsExperiences;
    return (
      <div>
        {this.props.isDisplayedBlock ? (
          <div className='bg-light mt-5 p-3'>
            {this.props.editMode ? (
              <div>
                <form className="" onChange={() => this.checkSubmitAvailability()}>

                  <div className='form-row'>
                    <div className="col-md-4 mb-3">
                      <label className='col-sm-2 col-form-label font-weight-bold'>Année</label>
                      <select name='year' id="year-select" className='form-control' value={this.state.valuesExperience.year} onChange={(e) => this.handleChange(e)}>
                        <option value='' >Choisir..</option>
                        {years.map(y => (
                          <option key={y} value={y} >{y}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className='col-sm-2 col-form-label font-weight-bold'>Mention</label>
                      <select name='rating' id="mention-select" className='form-control' value={this.state.valuesExperience.rating} onChange={(e) => this.handleChange(e)}>
                        <option value='' >Choisir..</option>
                        <option value='0' >Aucune</option>
                        <option value='1' >Passable</option>
                        <option value='2' >Bien</option>
                        <option value='3' >Très bien</option>
                        <option value='4' >Féliciations du Jury</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className='col-sm-2 col-form-label font-weight-bold'>Diplômé(e)</label>
                      <select name='degree' id="degree-select" className='form-control' value={this.state.valuesExperience.degree} onChange={(e) => this.handleChange(e)}>
                        <option value='' >Choisir..</option>
                        <option value='true' >Oui</option>
                        <option value='false' >Non</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-lg-12">
                      <label className='col-sm-2 col-form-label font-weight-bold'>Parcours suivis</label>
                      <input placeholder='Classe/Etudes/Option suivies' className='form-control' value={this.state.valuesExperience.name} name='name' onChange={(e) => this.handleChange(e)} />
                    </div>
                  </div>

                  <div className='form-row'>
                    <div className="col-md-6 mb-3">
                      <label className='col-sm-2 col-form-label font-weight-bold'>Moyenne</label>
                      <input placeholder='Moyenne' className='form-control' value={this.state.valuesExperience.mean} name='mean' type="number" step="0.1" min="0" max="20" onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className='col-sm-2 col-form-label font-weight-bold'>Rang</label>
                      <input placeholder='1/200' className='form-control' value={this.state.valuesExperience.ranking} name='ranking' onChange={(e) => this.handleChange(e)} />
                    </div>
                  </div>

                  <div className='form-row'>
                    <div className="col-md-6 mb-3">
                      <label className='col-sm-2 col-form-label font-weight-bold'>Etablissement</label>
                      <input placeholder='Nom Etablissement' className='form-control' value={this.state.valuesExperience.facility_name} name='facility_name' onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className='col-sm-2 col-form-label font-weight-bold'>Ville</label>
                      <input placeholder='Ville' className='form-control' value={this.state.valuesExperience.facility_place} name='facility_place' onChange={(e) => this.handleChange(e)} />
                    </div>
                  </div>
                  <button className='btn btn-info' onClick={(e) => this.handleSubmit(e)} disabled={!this.state.experienceCanBeSummited}>Ajouter</button>
                </form>
              </div>
            ) : null}
            <div>
              <hr />
              <h4>Expériences</h4>
              {this.state.experiences.map(e => (
                <div>
                  <span className='font-weight-bold'>{e.year}</span> : <span className='font-weight-bold'>Mention</span> : {this.convertRating(e.rating!)} <span className='font-weight-bold'>Diplôme</span> : {this.convertDegree(e.degree!)} <span className='font-weight-bold'>Parcours</span> : {e.name}  <span className='font-weight-bold'>Moyenne</span> : {e.mean} <span className='font-weight-bold'>Rang</span> : {e.ranking} <span className='font-weight-bold'>Etablissement</span> : {e.facility_name} <span className='font-weight-bold'>Ville</span> : {e.facility_place}
                  {this.props.editMode ? (<span className='text-danger ml-1 btn-delete float-right' onClick={(event) => this.removeElemFromExperiences(event, e)}>Supprimer</span>) : null}
                  <hr />
                </div>
              ))}
            </div>
          </div>
        ) : null
        }
      </div>
    );
  }
}

export default ScolarityForm;