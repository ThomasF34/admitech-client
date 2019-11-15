import React from 'react';
import Application from '../../../models/application/application';
import { draftApplication } from '../../../services/application.service';
import PopUp from '../../helpers/popUp';
import CivilForm from './civilForm';
import ALevelForm from './aLevelForm';

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
      AreDisplayedBlock: {
        civil: false,
        bac: false
      },
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
            <option value="" >Selectionner ...</option>
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

          <CivilForm isDisplayedBlock={this.state.AreDisplayedBlock["civil"]} setSelect={this.setSelect} handleChange={this.handleChange} values={this.state.values} />

        </div>

        {/* BAC */}
        <div className="col-md-12">
          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("bac") }} style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Baccalauréat</h4>
          </button>

          <ALevelForm isDisplayedBlock={this.state.AreDisplayedBlock["bac"]} handleChange={this.handleChange} values={this.state.values} />
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