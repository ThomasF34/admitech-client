import React from 'react';
import Application from '../../../models/application/application';
import { draftApplication } from '../../../services/application.service';
import PopUp from '../../helpers/popUp';
import { getEmail } from '../../../helpers/authorizationHelper';

export interface IFields {
  [key: string]: any;
}

interface IForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submitDraft: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IState {
  values: IFields,
  errors: IFields,
  AreDisplayedBlock: IFields,
  draftSuccess: boolean
}

interface IProps {

}

class CreateApplicationForm extends React.Component<IProps, IState> implements IForm {

  constructor(props: IProps) {
    super(props);
    this.state = {
      values: {},
      errors: {},
      AreDisplayedBlock: {},
      draftSuccess: false
    };
  }

  closeDraftPopUP = () => {
    if (this.state.draftSuccess === true)
      this.setState({
        draftSuccess: false
      });
  }

  submitDraft = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();
    const formValues = this.state.values
    const application = new Application(formValues, true)
    const success = () => {
      this.setState({
        draftSuccess: true
      })
    }
    const error = (e: Error) => {
      this.setState({
        draftSuccess: false
      })
      console.log(e)

    }

    //call to the api
    draftApplication(application)
      .then(rep => success())
      .catch(e => error(e));

  }

  changeDisplayMode = (blockName: string) => {
    const newDisplayedBlocks = this.state.AreDisplayedBlock
    newDisplayedBlocks[blockName] = !this.state.AreDisplayedBlock[blockName]
    this.setState({
      AreDisplayedBlock: newDisplayedBlocks
    })
  }

  setSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {

    if (event.target != null) {
      const newValues = this.state.values
      const field: string = event.target.name
      newValues[field] = event.target.value
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

        {/* SPECIALITE */}
        <div className="container" style={{ width: '40%', padding: '5%' }}>
          <h4 className="text-danger">Candidature pour : </h4>
          <select name="branch" className="form-control" placeholder="Sélectionner une valeur" value={this.state.values.branch} onChange={this.setSelect}>
            <option value="single" selected >Selectionner ...</option>
            <option value="single" >DO</option>
            <option value="married">SE</option>
          </select>
        </div>

        {/* ETAT CIVIL */}
        <div className="col-md-12">

          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("civil") }}
            style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Etat Civil</h4>
          </button>
          {this.state.AreDisplayedBlock["civil"] ? (
            <div className="form-group border border-info rounded">

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
                    <input name="birth_date" type="date" className="form-control" placeholder="Date de naissance" value={this.state.values.birth_date} onChange={this.handleChange} />
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
                      <option value="" selected >Selectionner ...</option>
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
                    <input name="postal_code" type="text" className="form-control" placeholder="Code Postal" value={this.state.values.postal_code} onChange={this.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Ville : </h6>
                    <input name="city" type="text" className="form-control" placeholder="Ville" value={this.state.values.city} onChange={this.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Pays : </h6>
                    <input name="state" type="text" className="form-control" placeholder="Pays" value={this.state.values.state} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Téléphone : </h6>
                    <input name="phone" type="text" className="form-control" placeholder="Téléphone" value={this.state.values.phone} onChange={this.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Email : </h6>
                    <input name="postal_code" type="text" className="form-control" placeholder={getEmail()} disabled />
                    <small className="text-danger">/!\ Cette adresse sera utilisée pour les échanges</small>
                  </div>
                </div>

              </div>
            </div>

          ) : null}
        </div>
        {/* BAC */}
        <div className="col-md-12">
          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("bac") }} style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Baccalauréat</h4>
          </button>
          {this.state.AreDisplayedBlock["bac"] ? (
            <div className="form-group border border-info rounded" style={{ height: '95%' }}>

              <div style={{ padding: '2%' }}>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Bac : </h6>
                    <input name="bac_name" type="text" className="form-control" placeholder="Bac" value={this.state.values.bac_name} onChange={this.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Année : </h6>
                    <input name="bac_year" type="text" className="form-control" placeholder="Année" value={this.state.values.bac_year} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Mention : </h6>
                    <input name="bac_mention" type="text" className="form-control" placeholder="Mention" value={this.state.values.bac_mention} onChange={this.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Dénomination exacte : </h6>
                    <input name="bac_realname" type="text" className="form-control" placeholder="Dénomination exacte" value={this.state.values.bac_realname} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Nom de la formation suivie cette année : </h6>
                    <input name="last_facility_name" type="text" className="form-control" placeholder="Nom de la formation" value={this.state.values.last_facility_name} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Adresse de l'établissement: </h6>
                    <input name="last_facility_address" type="text" className="form-control" placeholder="Adresse de l'établissement" value={this.state.values.last_facility_address} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Code Postal : </h6>
                    <input name="last_facility_postal_code" type="text" className="form-control" placeholder="Code Postal" value={this.state.values.last_facility_postal_code} onChange={this.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Ville : </h6>
                    <input name="last_facility_city" type="text" className="form-control" placeholder="Ville" value={this.state.values.last_facility_city} onChange={this.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Pays : </h6>
                    <input name="last_facility_state" type="text" className="form-control" placeholder="Pays" value={this.state.values.last_facility_state} onChange={this.handleChange} />
                  </div>
                </div>

              </div>
            </div>
          ) : null}
        </div>


        <div className="row justify-content-md-center" style={{ marginTop: '3%' }}>
          <div className="col-md-2">
            <button className="btn btn-outline-secondary btn-lg btn-block shadow" type="submit" onClick={this.submitDraft}>Enregistrer</button>
            <small className="text-secondary">Enregistrer en tant que brouillon</small>
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-success btn-lg btn-block shadow" type="submit">Envoyer</button>
            <small className="text-success">Soumettre à Polytech</small>
          </div>
          <PopUp title="Brouillon Candidature" content="Votre brouillon de candidature a bien été sauvegardé. Vous pourrez le retrouver dans le menu 'Mes candidatures'."
            show={this.state.draftSuccess} onClose={this.closeDraftPopUP} />
        </div>

      </form >
    );
  }
}


export default CreateApplicationForm;