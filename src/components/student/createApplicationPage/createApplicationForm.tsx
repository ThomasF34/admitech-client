import React from 'react';
import Application from '../../../models/application/application';
import { createApplication, getSingleApplication, updateApplication } from '../../../services/application.service';
import CivilForm from './civilForm';
import ALevelForm from './aLevelForm';
import InfoPopUp from '../../helpers/InfoPopUp';

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
  draftSuccess: boolean,
  draftFailure: boolean,
  error: boolean,
  errorMessage: string

}

interface IProps {
  existingApplicationId: string | undefined
}

class CreateApplicationForm extends React.Component<IProps, IState> implements IForm {

  componentDidMount() {
    if (this.props.existingApplicationId !== undefined) {

      getSingleApplication(this.props.existingApplicationId)
        .then(res => {
          this.setState({
            values: res.data
          });
        })
        .catch((e) => this.error(e))
    }

  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      values: {},
      errors: {},
      AreDisplayedBlock: {
        civil: false,
        bac: false
      },
      draftSuccess: false,
      draftFailure: false,
      error: false,
      errorMessage:""
    };
  }

  closeDraftSuccessPopUP = () => {
    if (this.state.draftSuccess === true)
      this.setState({
        draftSuccess: false
      });
  }

  closeErrorPopUP = () => {
    if (this.state.error === true)
      this.setState({
        error: false
      });
  }

  error = (e: any) => {
    this.setState({
      error: true,
      errorMessage: e.response.data
    })
  }

  submitDraft = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();
    const formValues = this.state.values

    const success = () => {
      this.setState({
        draftSuccess: true
      })
    }

    let existingAppId = this.state.values.id
    const application = new Application(formValues, true)

    if (existingAppId)
      updateApplication(existingAppId, application)
        .then(rep => success())
        .catch(e => this.error(e));
    else
      createApplication(application)
        .then(rep => success())
        .catch(e => this.error(e));

  }

  changeDisplayMode = (blockName: string) => {
    const newDisplayedBlocks = this.state.AreDisplayedBlock
    newDisplayedBlocks[blockName] = !this.state.AreDisplayedBlock[blockName]
    this.setState({
      AreDisplayedBlock: newDisplayedBlocks
    })
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {

    if (event.target != null) {
      const newValues = this.state.values
      const field: string = event.target.name
      const value: string = event.target.value
      newValues[field] = value
      console.log(newValues)
      this.setState({
        values: newValues
      });

      console.log(this.state.values)

    }
  }

  render() {

    return (

      <form style={{ width: '100%', height: '100%' }}>

        {/* SPECIALITE */}
        <div className="container" style={{ width: '40%', padding: '5%' }}>

          <h4 className="text-danger">Candidature pour : </h4>
          <select name="branch" className="form-control" onChange={this.handleChange}>
            <option value="" >Selectionner ...</option>
            <option value="DO" selected={this.state.values.branch && this.state.values.branch.toUpperCase() === "DO"}>DO</option>
            <option value="SE" selected={this.state.values.branch && this.state.values.branch.toUpperCase() === "SE"}>SE</option>
          </select>
        </div>

        {/* ETAT CIVIL */}
        <div className="col-md-12">

          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("civil") }}
            style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Etat Civil</h4>
          </button>

          <CivilForm isDisplayedBlock={this.state.AreDisplayedBlock["civil"]} handleChange={this.handleChange} values={this.state.values} />

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
        </div>

        <InfoPopUp isError={false} title="Brouillon Candidature" content="Votre brouillon de candidature a bien été sauvegardé. Vous pourrez le retrouver dans le menu 'Mes candidatures'."
          show={this.state.draftSuccess} onClose={this.closeDraftSuccessPopUP} />
        <InfoPopUp isError={true} title="ERREUR" content={this.state.errorMessage===""?"Une erreur innatendue s'est produite.":this.state.errorMessage}
          show={this.state.error} onClose={this.closeErrorPopUP} />

      </form >
    );
  }
}


export default CreateApplicationForm;