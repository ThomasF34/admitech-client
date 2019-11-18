import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Experiences } from '../../../models/application/application';

interface IProps {
  experiences: Array<Experiences>

}
interface IState {
  yearsExperiences: Array<string>,
  valuesExperience: IFields,
  experiences: Array<Experiences>

}


interface IFields {
  [key: string]: any;
}



class ExperiencesForm extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      yearsExperiences: this.generateYears(),
      valuesExperience: {
        facility_name: '',
        facility_place: '',
        name: '',
        mean: '',
        ranking: ''

      },
      experiences: this.props.experiences
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
      const newValues = this.state.valuesExperience
      const field: string = event.target.name
      const value: string = event.target.value
      newValues[field] = value
      console.log(newValues)

      this.setState({
        valuesExperience: newValues
      });
    }
  }

  handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
event.preventDefault();

const newExperience = new Experiences(this.state.valuesExperience.degree,this.state.valuesExperience.facility_name
  ,this.state.valuesExperience.facility_place,this.state.valuesExperience.mean,this.state.valuesExperience.name,this.state.valuesExperience.ranking
  ,this.state.valuesExperience.rating,this.state.valuesExperience.year);


  this.setState(previousState => ({
    experiences: [...previousState.experiences, newExperience],
    valuesExperience: {
      facility_name: '',
      facility_place: '',
      name: '',
      mean: '',
      ranking: ''
    }
  }));


  }

  render() {
    const years = this.generateYears();
    console.log(this.state)
    return (
      <div className='container bg-light mt-5 p-3'>
        <form className="">

          <div className='form-row'>
            <div className="col-md-4 mb-3">
              <label className='col-sm-2 col-form-label'>Année</label>
              <select name='year' id="year-select" className='form-control' onChange={(e) => this.handleChange(e)}>
                <option value='' >Choisir..</option>
                {years.map(y => (
                  <option key={y} value={y} >{y}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className='col-sm-2 col-form-label'>Mention</label>
              <select name='rating' id="mention-select" className='form-control' onChange={(e) => this.handleChange(e)}>
                <option value='' >Choisir..</option>
                <option value='0' >Aucune</option>
                <option value='1' >Passable</option>
                <option value='2' >Bien</option>
                <option value='3' >Très bien</option>
                <option value='4' >Féliciations du Jury</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className='col-sm-2 col-form-label'>Diplômé(e)</label>
              <select name='degree' id="degree-select" className='form-control' onChange={(e) => this.handleChange(e)}>
                <option value='' >Choisir..</option>
                <option value='true' >Oui</option>
                <option value='false' >Non</option>
              </select>
            </div>
          </div>


          <div className="form-group row">
            <div className="col-lg-12">
            <label className='col-sm-2 col-form-label'>Parcours suivis</label>
              <input placeholder='Classe/Etudes/Option suivies' className='form-control' value={this.state.valuesExperience.name} name='name' onChange={(e) => this.handleChange(e)} />
            </div>
          </div>

          <div className='form-row'>
            <div className="col-md-6 mb-3">
              <label className='col-sm-2 col-form-label'>Moyenne</label>
              <input placeholder='Moyenne' className='form-control' value={this.state.valuesExperience.mean} name='mean' onChange={(e) => this.handleChange(e)} />
            </div>

            <div className="col-md-6 mb-3">
              <label className='col-sm-2 col-form-label'>Rang</label>
              <input placeholder='1/200' className='form-control' value={this.state.valuesExperience.ranking} name='ranking' onChange={(e) => this.handleChange(e)} />
            </div>
          </div>

          <div className='form-row'>
            <div className="col-md-6 mb-3">
              <label className='col-sm-2 col-form-label'>Etablissemnt</label>
              <input placeholder='Nom Etablissement' className='form-control'  value={this.state.valuesExperience.facility_name} name='facility_name' onChange={(e) => this.handleChange(e)} />
            </div>

            <div className="col-md-6 mb-3">
              <label className='col-sm-2 col-form-label'>Ville</label>
              <input placeholder='Ville' className='form-control'  value={this.state.valuesExperience.facility_place} name='facility_place' onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <button className='btn btn-info' onClick={(e)=>this.handleSubmit(e)}>Ajouter</button>
        </form>

        <div>
          <hr/>
          <h4>Mes Expériences</h4>
          {this.state.experiences.map(e => (
  <p>{e.year}:  Moyenne: {e.mean}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default ExperiencesForm;