import React from 'react';
import UserSignInDto from '../../models/user/userSignInDto';
import { login } from '../../services/auth.service';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import InfoPopUp from '../helpers/InfoPopUp';

interface ISignInForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IError {
  email?: string,
  password?: string,
}

interface IState {
  email: string,
  password: string,
  errors: IError,
  loggegIn: boolean,
  nonPlanError: boolean,
  failure: boolean
}

interface IProps {
  redirectPath: string
}

const requiredField: string = 'Ce champ est obligatoire.'
const validEmail: string = 'Adresse non valide.'

type SignInFormProps = IProps & RouteComponentProps;
class SignInForm extends React.Component<SignInFormProps, IState> implements ISignInForm {

  constructor(props: SignInFormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: requiredField,
        password: requiredField
      },
      loggegIn: false,
      failure: false,
      nonPlanError: false
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  closeFailurePopUP = () => {
    if (this.state.failure === true)
      this.setState({
        failure: false
      });
  }

  closeErrorPopUP = () => {
    if (this.state.nonPlanError === true)
      this.setState({
        nonPlanError: false
      });
  }

  validForm = (): boolean => {
    let error = this.state.errors
    return (
      (error.email === undefined || error.email === '') &&
      (error.password === undefined || error.password === '')
    )
  }

  submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();

    const error = () => {
      this.setState({
        nonPlanError: true,
        password: '',
        email: ''
      });
    }

    const missingFields = (response: any) => {
      this.setState({
        errors: response.data,
        failure: true
      })
    }
    const incorrect = () => {
      this.setState({
        errors: {
          email: 'L\'adresse mail et/ou le mot de passe sont incorrects.'
        },
        password: '',
        email: '',
        failure: true
      })
    }

    const user = new UserSignInDto(this.state.email, this.state.password);
    if (this.validForm()) {
      login(user)
        .then(res => {
          if (res) {
            if (this.state.loggegIn === false) {
              this.setState({ loggegIn: true }, () => {
              });
            }
          }
        })
        .catch((e: any) => {
          if (e.response.status === 400)
            missingFields(e.response)
          else {
            if (e.response.status === 404)
              incorrect()
            else
              error()
          }
        });
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

  changePassword = (value: string) => {
    let newErrors = this.state.errors
    newErrors.password = value === '' ? requiredField : ""
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
        case 'password':
          this.changePassword(event.target.value)
          break;
      }
    }
  }

  render() {
    const loggegIn = this.state.loggegIn;
    if (loggegIn === true) {
      return <Redirect to={this.props.redirectPath} push />
    } else {
      return (
        <div className='container' style={{ width: '75%', marginTop: '15%' }}>
          <form className='needs-validation'>
            <h6 className='text-danger'>{this.state.errors.email}</h6>
            <div className='form-group' style={{ marginBottom: '8%' }} >
              <input name='email' type='email' className='form-control form-control-lg text-center' onChange={this.handleChange}
                placeholder='Adresse email' value={this.state.email} />
            </div>
            <h6 className='text-danger'>{this.state.errors.password || ''}</h6>
            <div className='form-group' style={{ marginBottom: '8%' }}>
              <input name='password' type='password' className='form-control form-control-lg text-center' onChange={this.handleChange}
                placeholder='Mot de passe' value={this.state.password} />
            </div>
            <div className='form-group text-center' style={{ marginTop: '15%' }}>
              <button className='btn btn-outline-secondary btn-lg btn-block shadow' type='submit' onClick={(e) => this.submit(e)}>Connexion</button>
              <p>Powered by Polytech Connect</p>
            </div>
          </form>
          <InfoPopUp isError={true} title="ERREUR" content="Une erreur innatendue s'est produite."
            show={this.state.nonPlanError} onClose={this.closeErrorPopUP} />
          <InfoPopUp isError={true} title="ERREUR" content="Des champs sont incorrectes ou manquants."
            show={this.state.failure} onClose={this.closeFailurePopUP} />
        </div>
      );
    }

  }
}

export default withRouter(SignInForm);