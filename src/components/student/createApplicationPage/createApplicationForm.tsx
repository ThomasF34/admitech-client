import React from 'react';

export interface IFields {
  [key: string]: any;
  /*first_name?: string,
  last_name?: string,
  phone?: string,
  nationnality?: string,
  //birth_date?:Date,
  birth_place?: string,
  //family_status?:string,
  address?: string,
  postal_code?: string,
  city?: string,
  state?: string*/

}

interface IForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
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

  submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();

  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target != null) {
      const newValues = this.state.values
      const field : string = event.target.name
      const value : string = event.target.value
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
                <input name="last_name" type="text" className="form-control" placeholder="Nom" value={this.state.values.last_name} onChange={this.handleChange}/>
              </div>
              <div className="col">
                <h6>Prénom : </h6>
                <input name="first_name" type="text" className="form-control" placeholder="Prénom" value={this.state.values.first_name} onChange={this.handleChange}/>
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Date de naissance : </h6>
                <input name="birth_date" type="date" className="form-control" placeholder="Date de naissance" />
              </div>
              <div className="col">
                <h6>Lieu de naissance : </h6>
                <input name="birth_place" type="text" className="form-control" placeholder="Lieu de naissance" />
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Nationalité : </h6>
                <input name="nationnality" type="text" className="form-control" placeholder="Nationalité" />
              </div>
              <div className="col">
                <h6>Situation familiale : </h6>
                <select name="family_status" className="form-control" placeholder="Sélectionner une valeur">
                  <option id="single">Célibataire</option>
                  <option id="married">Marié(e)</option>
                  <option id="other">Autre</option>
                </select>
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Adresse : </h6>
                <input name="address" type="text" className="form-control" placeholder="Adresse" />
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Code Postal : </h6>
                <input name="postal_code" type="text" className="form-control" placeholder="Code Postal" />
              </div>
              <div className="col">
                <h6>Ville : </h6>
                <input name="city" type="text" className="form-control" placeholder="Ville" />
              </div>
              <div className="col">
                <h6>Pays : </h6>
                <input name="state" type="text" className="form-control" placeholder="Pays" />
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col">
                <h6>Téléphone : </h6>
                <input name="phone" type="text" className="form-control" placeholder="Téléphone" />
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
            <button className="btn btn btn btn-info btn-lg btn-block shadow" type="submit" onClick={this.submit}>Enregistrer</button>
            <small className="text-info">Enregistrer en tant que brouillon</small>
          </div>
          <div className="col-md-2">
            <button className="btn btn btn-success btn-lg btn-block shadow" type="submit" onClick={this.submit}>Envoyer</button>
            <small className="text-success">Soumettre à Polytech</small>
          </div>
        </div>

      </form >






    );
  }
}


export default CreateApplicationForm;