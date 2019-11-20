import React from 'react';
import Application, { Experiences, Attachments } from '../../../models/application/application';
import edit from '../../../img/icons/edit.png';
import { createApplication, getSingleApplication, updateApplication } from '../../../services/application.service';
import InfoPopUp from '../../helpers/InfoPopUp';
import GlobalApplicationForm from './globalApplicationForm';
import { isStudent, isAdmin } from '../../../helpers/authorizationHelper';
import { IAttachement } from './filesContainer';
import { removeToken } from '../../../services/token.service';

export interface IFields {
  [key: string]: any;
}

interface IForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submitDraft: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IState {
  values: IFields,
  experiences: Array<Experiences>,
  attachments: Array<IAttachement>,
  errors: IFields,
  draftSuccess: boolean,
  draftFailure: boolean,
  applicationSuccess: boolean,
  applicationFailure: boolean,
  error: boolean,
  errorMessage: string,
  editMode: boolean

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
            values: res.data,
            attachments: res.data.attachments,
            experiences: res.data.experiences
          });
        })
        .catch((e) => this.error(e))
    }
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      values: {
        other_apply: false,
        other_apply_apprentise: false

      },
      experiences: [],
      attachments: [],
      errors: {},
      draftSuccess: false,
      draftFailure: false,
      applicationSuccess: false,
      applicationFailure: false,
      error: false,
      errorMessage: "",
      editMode: this.props.existingApplicationId === undefined
    };
  }

  closeDraftSuccessPopUP = () => {
    if (this.state.draftSuccess === true)
      this.setState({
        draftSuccess: false
      });
  }

  closeApplicationSuccessPopUP = () => {
    if (this.state.applicationSuccess === true)
      this.setState({
        applicationSuccess: false
      });
  }
  closeFailurePopUP = () => {
    if (this.state.applicationFailure === true || this.state.draftFailure === true)
      this.setState({
        applicationFailure: false,
        draftFailure: false
      });
  }

  closeErrorPopUP = () => {
    if (this.state.error === true)
      this.setState({
        error: false
      });
  }

  error = (e: any) => {
    let message = e.response.data
    if (message === "Token expired") {
      message = "Temps de connexion expiré. Veuillez vous reconnecter."
      removeToken()
      window.location.reload()
    }
    this.setState({
      error: true,
      errorMessage: message
    })
  }

  changeEditMode = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    })
  }

  submitDraft = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();
    const formValues = this.state.values

    const successUpdate = () => {
      this.setState({
        draftSuccess: true
      })
    }

    const missingFields = (reponse: any) => {
      this.setState({
        draftFailure: true,
        errors: reponse.data
      })
    }

    const successCreate = (reponse: any) => {
      this.setState({
        draftSuccess: true,
        values: reponse.data
      })
    }

    let existingAppId = this.state.values.id
    const application = new Application(formValues, true)
    if (existingAppId)
      updateApplication(existingAppId, application)
        .then(rep => successUpdate())
        .catch(e => this.error(e));
    else
      createApplication(application)
        .then(rep => successCreate(rep))
        .catch(e => {
          if (e.status === 400)
            missingFields(e)
          else
            this.error(e)
        });

  }

  submitApplication = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();
    const formValues = this.state.values

    const successUpdate = () => {
      this.setState({
        applicationSuccess: true
      })
    }

    const successCreate = (reponse: any) => {
      this.setState({
        applicationSuccess: true,
        values: reponse.data
      })
    }

    const missingFields = (reponse: any) => {
      this.setState({
        applicationFailure: true,
        errors: reponse.data
      })
    }

    let existingAppId = this.state.values.id
    const application = new Application(formValues, false)

    if (existingAppId)
      updateApplication(existingAppId, application)
        .then(rep => successUpdate())
        .catch(e => this.error(e));
    else
      createApplication(application)
        .then(rep => successCreate(rep))
        .catch(e => {
          if (e.status === 400)
            missingFields(e)
          else
            this.error(e)
        });
  }

  handleChangeAttachements = (attachementsUpdated: IAttachement[]) => {

    let newAttachments = attachementsUpdated.map(x => new Attachments(x.id, x.attach_type, x.key))

    let newValues = this.state.values
    newValues.attachments = newAttachments
    this.setState({
      values: newValues
    })
  }

  handleChangeExperiences = (experiencesUpdated: Experiences[]) => {
    let newValues = this.state.values
    newValues.experiences = experiencesUpdated
    this.setState({
      values: newValues
    })
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {

    if (event.target != null) {

      const newValues = this.state.values
      let field: string = event.target.name
      let value: any = event.target.value
      if (field === ("other_apply" || "other_apply_apprentise")) {
        value = !newValues[field]
      }

      newValues[field] = value
      this.setState({
        values: newValues
      });
    }
  }

  render() {

    return (

      <form style={{ width: '100%', height: '100%' }}>

        {/*Edit Buttons*/}
        {this.props.existingApplicationId !== undefined ? (
          <div className="row justify-content-md-end" style={{ marginTop: '3%', marginRight: '5%' }}>
            <div className="col-4 col-md-1 col-sm-3">
              <button className="btn btn-light btn-lg btn-block shadow" onClick={this.changeEditMode}>
                <img src={edit} className="img-icon " alt="editButton" />
              </button>
            </div>
          </div>
        ) : null}

        <GlobalApplicationForm handleExperiencesChange={this.handleChangeExperiences} handleAttachmentsChange={this.handleChangeAttachements} handleChange={this.handleChange} attachments={this.state.attachments} experiences={this.state.experiences} values={this.state.values} editMode={this.state.editMode} />

        {/*Saving Buttons*/}
        {isStudent() ? (
          <div className="row justify-content-center" style={{ marginTop: '2%' }}>
            <div className="col-6 col-sm-5 col-lg-2">
              <button className="btn btn-outline-secondary btn-lg btn-block shadow" type="submit" onClick={this.submitDraft}>Enregistrer</button>
              <small className="text-secondary">Enregistrer en tant que brouillon</small>
            </div>
            <div className="col-5 col-sm-5 col-lg-2">
              <button className="btn btn-outline-success btn-lg btn-block shadow" type="submit" onClick={this.submitApplication}>Envoyer</button>
              <small className="text-success">Soumettre à Polytech</small>
            </div>
          </div>
        ) : null}
        {isAdmin() ? (
          <div className="row justify-content-md-center" style={{ marginTop: '2%' }}>
            <div className="col-6 col-sm-5 col-md-2">
              <button className="btn btn-outline-success btn-lg btn-block shadow" type="submit" onClick={this.submitApplication}>Enregistrer</button>
            </div>
          </div>
        ) : null}
        {/*Pop up*/}
        <InfoPopUp isError={false} title="Brouillon Candidature" content="Votre brouillon de candidature a bien été sauvegardé. Vous pourrez le retrouver dans le menu 'Mes candidatures'."
          show={this.state.draftSuccess} onClose={this.closeDraftSuccessPopUP} />
        <InfoPopUp isError={false} title="Envoie de votre Candidature" content="Votre candidature a bien été envoyée. Nous pouvez dès maintenant suivre son avancement."
          show={this.state.applicationSuccess} onClose={this.closeApplicationSuccessPopUP} />
        <InfoPopUp isError={true} title="ERREUR" content={this.state.errorMessage === "" ? "Une erreur innatendue s'est produite." : this.state.errorMessage}
          show={this.state.error} onClose={this.closeErrorPopUP} />
        <InfoPopUp isError={true} title="ERREUR" content="Veuillez remplire tous les champs nécessaires s'il vous plait."
          show={this.state.applicationFailure || this.state.draftFailure} onClose={this.closeFailurePopUP} />

      </form >
    );
  }
}


export default CreateApplicationForm;