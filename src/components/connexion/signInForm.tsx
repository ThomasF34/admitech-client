import React from 'react';
import UserSignInDto from '../../models/user/userSignInDto';
import { login } from '../../services/auth.service';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../helpers/authorizationHelper';

interface ISignInForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IState {
  email: string,
  password: string,
  error: string,
  loggegIn: boolean
}

interface IProps {
  redirectPath: string
}

type SignInFormProps = IProps & RouteComponentProps;
class SignInForm extends React.Component<SignInFormProps, IState> implements ISignInForm {

  constructor(props: SignInFormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loggegIn: isLoggedIn()
    };
    this.submit=this.submit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();
    const setError = () => this.setState({
      error: 'L\'adresse mail et/ou le mot de passe sont invalides. Veuillez réessayer s\'il vous plait.',
      password: '',
      email: ''
    });

    const user = new UserSignInDto(this.state.email, this.state.password);
    //call to the api
    login(user)
      .then(res => {
        if (res) {
          if (this.state.loggegIn===false) {
            this.setState({
              loggegIn: true
            });
          }
        }
      })
      .catch(setError);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target != null) {
      switch (event.target.name) {
        case 'email':
          this.setState({
            email: event.target.value
          });
          break;
        case 'password':
          this.setState({
            password: event.target.value
          });
          break;
      }
    }
  }

  render() {
    const loggegIn = this.state.loggegIn;
    if (loggegIn === true) {
      window.location.reload();
      return <Redirect to={this.props.redirectPath} />
    } else {
      return (
        <div className='container' style={{ width: '75%', marginTop: '15%' }}>
          <h6 className='text-danger'>{this.state.error}</h6>
          <form className='needs-validation'>
            <div className='form-group' style={{ marginBottom: '8%' }} >
              <input name='email' type='email' className='form-control form-control-lg text-center' onChange={this.handleChange}
                placeholder='Adresse email' value={this.state.email} required />
            </div>
            <div className='form-group' style={{ marginBottom: '8%' }}>
              <input name='password' type='password' className='form-control form-control-lg text-center' onChange={this.handleChange}
                placeholder='Mot de passe' value={this.state.password} required />
            </div>
            <div className='form-group text-center' style={{ marginTop: '15%' }}>
              <button className='btn btn-outline-secondary btn-lg btn-block shadow' type='submit' onClick={(e) => this.submit(e)}>Connexion</button>
              <p>Powered by Polytech Connect</p>
            </div>
          </form>
        </div>
      );
    }

  }
}

export default withRouter(SignInForm);