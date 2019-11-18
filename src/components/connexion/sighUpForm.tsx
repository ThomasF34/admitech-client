import React from 'react';
import UserSignUpDto from '../../models/user/userSignUpDto';
import { signUp } from '../../services/auth.service';
import { Redirect } from 'react-router';
import InfoPopUp from '../helpers/InfoPopUp';

interface ISignUpForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IErrors {
  email?: string,
  first_name?: string,
  last_name?: string,
  password?: string,
  confirm_password?: string,
  check?: string
}
interface IState {
  email: string,
  first_name: string,
  last_name: string,
  password: string,
  confirm_password: string,
  check: boolean,
  errors: IErrors,
  signUpDone: boolean,
  nonPlanError: boolean,
  failure: boolean,
  success: boolean
}

interface IProps {
  redirectPath: string,
  role: string
}

const requiredField: string = 'Ce champ est obligatoire.'
const accept: string = 'Veuillez accepter les conditions.'
const matchingPwdError: string = 'Les mots de passes ne sont pas identiques.'
const passwordSize: string = 'Votre mot de passe doit comporter au moins 6 caractères'
const validEmail: string = 'Adresse non valide.'

class SignUpForm extends React.Component<IProps, IState> implements ISignUpForm {

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      confirm_password: '',
      check: false,
      errors: {
        email: requiredField,
        first_name: requiredField,
        last_name: requiredField,
        password: requiredField,
        confirm_password: requiredField,
        check: accept
      },
      signUpDone: false,
      nonPlanError: false,
      failure: false,
      success: false
    };
  }

  closeErrorPopUP = () => {
    if (this.state.nonPlanError === true)
      this.setState({
        nonPlanError: false
      });
  }
  closeSuccessPopUP = () => {
    if (this.state.success === true)
      this.setState({
        signUpDone: true,
        success: false
      });
  }
  closeFailurePopUP = () => {
    if (this.state.failure === true)
      this.setState({
        failure: false
      });
  }
  error = (e: any) => {
    this.setState({
      nonPlanError: true
    })
    console.log(e)
  }

  validForm = (): boolean => {
    let error = this.state.errors
    return (
      (error.email === undefined || error.email === '') &&
      (error.first_name === undefined || error.first_name === '') &&
      (error.last_name === undefined || error.last_name === '') &&
      (error.password === undefined || error.password === '') &&
      (error.confirm_password === undefined || error.confirm_password === '') &&
      (error.check === undefined || error.check === '')
    )
  }

  submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {

    event.preventDefault();
    const validConnexion = () => this.setState({
      success: true
    });

    if (this.validForm()) {
      const user = new UserSignUpDto(this.state.email, this.state.first_name, this.state.last_name, this.state.password, this.props.role);
      //call to the api
      signUp(user)
        .then(validConnexion)
        .catch((e) => {
          if (e.status === 400)
            missingFields(e)
          else
            this.error(e)
        });
    } else {
      this.setState({
        failure: true
      })
    }

    const missingFields = (reponse: any) => {
      this.setState({
        errors: reponse.data,
        failure: true
      })
    }

  }

  changeEmail = (value: string) => {
    let newErrors = this.state.errors

    newErrors.email = value === '' ? requiredField : (value.includes('@') ? "" : validEmail)
    this.setState({
      email: value,
      errors: newErrors
    });
  }

  changeFistname = (value: string) => {
    let newErrors = this.state.errors
    newErrors.first_name = value === '' ? requiredField : ""
    this.setState({
      first_name: value,
      errors: newErrors
    });
  }

  changeLastname = (value: string) => {
    let newErrors = this.state.errors
    newErrors.last_name = value === '' ? requiredField : ""
    this.setState({
      last_name: value,
      errors: newErrors
    });
  }

  acceptCheck = () => {
    let newErrors = this.state.errors
    newErrors.check = this.state.check === true ? accept : ""
    this.setState({
      check: !this.state.check,
      errors: newErrors
    });
  }

  confirmPassword = (value: string) => {
    let newErrors = this.state.errors
    newErrors.confirm_password = value === '' ? requiredField : (this.state.password !== value ? matchingPwdError : "")
    this.setState({
      confirm_password: value,
      errors: newErrors
    });
  }

  changePassword = (value: string) => {
    let newErrors = this.state.errors
    newErrors.password = value === '' ? requiredField : (this.state.password.length < 5 ? passwordSize : "")
    this.setState({
      password: value,
      errors: newErrors
    });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target != null) {
      switch (event.target.name) {
        case 'email':
          this.changeEmail(event.target.value)
          break;
        case 'first_name':
          this.changeFistname(event.target.value)
          break;
        case 'last_name':
          this.changeLastname(event.target.value)
          break;
        case 'password':
          this.changePassword(event.target.value)
          break;
        case 'confirm_password':
          this.confirmPassword(event.target.value)
          break;
        case 'check':
          this.acceptCheck()
          break;
      }
    }
  }

  render() {
    if (this.state.signUpDone)
      return <Redirect to={this.props.redirectPath} />;
    else {
      return (

        <div className="container" style={{ width: '75%', marginTop: '9%' }}>
          <form className="needs-validation">

            <div className="form-group" style={{ marginBottom: '8%' }} >
              <div className="form-group">
                <input name="email" type="text" className="form-control form-control-lg text-center" placeholder="Adresse email"
                  onChange={this.handleChange} value={this.state.email} required />
                <h6 className='text-danger'>{this.state.errors.email}</h6>
              </div>
              <div className="form-group">
                <input name="last_name" type="text" className="form-control form-control-lg text-center" placeholder="Nom"
                  onChange={this.handleChange} value={this.state.last_name} />
                <h6 className='text-danger'>{this.state.errors.last_name}</h6>
              </div>
              <div className="form-group" >
                <input name="first_name" type="text" className="form-control form-control-lg text-center" placeholder="Prénom"
                  onChange={this.handleChange} value={this.state.first_name} />
                <h6 className='text-danger'>{this.state.errors.first_name}</h6>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '8%' }} >
              <div className="form-group">
                <input name="password" type="password" className="form-control form-control-lg text-center" placeholder="Mot de passe"
                  onChange={this.handleChange} value={this.state.password} />
                <h6 className='text-danger'>{this.state.errors.password}</h6>
              </div>
              <div className="form-group">
                <input name="confirm_password" type="password" className="form-control form-control-lg text-center" placeholder="Répétez votre mot de passe"
                  onChange={this.handleChange} value={this.state.confirm_password} />
              </div>
              <h6 className="text-danger">{this.state.errors.confirm_password}</h6>
            </div>

            <div className="form-group">
              <div className="form-check">
                <h6 className="text-danger">{this.state.errors.check}</h6>
                <input name="check" className="form-check-input input-lg" type="checkbox" onChange={this.handleChange} />
                J&apos;accepte les conditions générales d&apos;utilisation
              </div>
            </div>


            <div className="form-group text-center" style={{ marginTop: '15%', marginBottom: '10%' }}>
              <button className="btn btn-outline-secondary btn-lg btn-block shadow" type="submit" onClick={this.submit}>Créer votre compte</button>
            </div>
            <h5>Votre identifiant sera unique aux plateformes de Polytech.</h5>
          </form>
          <InfoPopUp isError={true} title="ERREUR" content="Une erreur innatendue s'est produite."
            show={this.state.nonPlanError} onClose={this.closeErrorPopUP} />
          <InfoPopUp isError={true} title="ERREUR" content="Veuillez compléter tous les champs."
            show={this.state.failure} onClose={this.closeFailurePopUP} />
          <InfoPopUp isError={false} title="INSCRIPTION" content="Votre inscription est validée. Veuillez vous connecter."
            show={this.state.success} onClose={this.closeSuccessPopUP} />
        </div>
      );
    }
  }
}

export default SignUpForm;