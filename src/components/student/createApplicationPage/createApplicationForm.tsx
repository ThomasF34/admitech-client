import React from 'react';
import Application from '../../../models/application/application';
import { draftApplication } from '../../../services/application.service';

export interface IFields {
  [key: string]: any;
}

interface IForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submitDraft: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IState {
  values: IFields,
  errors: IFields
}

interface IProps {

}

class CreateApplicationForm extends React.Component<IProps, IState> implements IForm {

  constructor(props: IProps) {
    super(props);
    this.state = {
      values: {},
      errors: {}
    };
  }

  submitDraft = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();
    const formValues = this.state.values
    const application = new Application(formValues, true)
    console.log("mon app : ")
    console.log(application)

    //call to the api
    draftApplication(application)
      .then(e => console.log("ok"))
      .catch(e => console.log(e));

  }

  setSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {

    if (event.target != null) {
      const newValues = this.state.values
      newValues.family_status = event.target.value
      console.log(newValues)
      this.setState({
        values: newValues
      });
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target != null) {
      const newValues = this.state.values
      const field: string = event.target.name
      const value: string = event.target.value
      newValues[field] = value
      console.log(newValues)

      this.setState({
        values: newValues
      });



    }
  }

  render() {

    return (

      <form style={{ width: '100%', height: '100%' }}>

        <h4 className="text-info">Etat Civil</h4>
        <div className="form-group col-md-6 border border-info rounded">

          <div style={{ padding: '2%' }}>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Nom : </h6>
                <input name="last_name" type="text" className="form-control" placeholder="Nom" value={this.state.values.last_name} onChange={this.handleChange} />
              </div>
              <div className="col">
                <h6>Prénom : </h6>
                <input name="first_name" type="text" className="form-control" placeholder="Prénom" value={this.state.values.first_name} onChange={this.handleChange} />
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Date de naissance : </h6>
                <input name="birth_date" type="date" className="form-control" placeholder="Date de naissance" value={this.state.values.birth_date} onChange={this.handleChange}/>
              </div>
              <div className="col">
                <h6>Lieu de naissance : </h6>
                <input name="birth_place" type="text" className="form-control" placeholder="Lieu de naissance" value={this.state.values.birth_place} onChange={this.handleChange} />
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Nationalité : </h6>
                <input name="nationnality" type="text" className="form-control" placeholder="Nationalité" value={this.state.values.nationnality} onChange={this.handleChange} />
              </div>
              <div className="col">
                <h6>Situation familiale : </h6>
                <select name="family_status" className="form-control" placeholder="Sélectionner une valeur" value={this.state.values.family_status} onChange={this.setSelect}>
                  <option value="single" >Célibataire</option>
                  <option value="married">Marié(e)</option>
                  <option value="other">Autre</option>
                </select>
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Adresse : </h6>
                <input name="address" type="text" className="form-control" placeholder="Adresse" value={this.state.values.address} onChange={this.handleChange} />
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Code Postal : </h6>
                <input name="postal_code" type="text" className="form-control" placeholder="Code Postal"  value={this.state.values.postal_code} onChange={this.handleChange}/>
              </div>
              <div className="col">
                <h6>Ville : </h6>
                <input name="city" type="text" className="form-control" placeholder="Ville"  value={this.state.values.city} onChange={this.handleChange}/>
              </div>
              <div className="col">
                <h6>Pays : </h6>
                <input name="state" type="text" className="form-control" placeholder="Pays"  value={this.state.values.state} onChange={this.handleChange}/>
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Téléphone : </h6>
                <input name="phone" type="text" className="form-control" placeholder="Téléphone"  value={this.state.values.phone} onChange={this.handleChange}/>
              </div>
              <div className="col">
                <h6>Email : </h6>
                <input name="postal_code" type="text" className="form-control" placeholder="Adresse token" disabled />
                <small className="text-danger">/!\ Cette adresse sera utilisée pour les échanges</small>
              </div>
            </div>

          </div>
        </div>
        <div className="row justify-content-md-center" style={{ marginTop: '3%' }}>
          <div className="col-md-2">
            <button className="btn btn btn btn-info btn-lg btn-block shadow" type="submit" onClick={this.submitDraft}>Enregistrer</button>
            <small className="text-info">Enregistrer en tant que brouillon</small>
          </div>
          <div className="col-md-2">
            <button className="btn btn btn-success btn-lg btn-block shadow" type="submit">Envoyer</button>
            <small className="text-success">Soumettre à Polytech</small>
          </div>
        </div>

      </form >
    );
  }
}


export default CreateApplicationForm;