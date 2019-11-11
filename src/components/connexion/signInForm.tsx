import React from 'react';
import UserSignInDto from '../../models/user/userSignInDto';
import { login } from '../../services/auth.service';
import { Redirect } from 'react-router-dom';
import { isLogin } from '../../helpers/authorizationHelper';

interface ISignInForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IState {
  email: string,
  password: string,
  error: string,
  connexionDone: boolean
}

interface IProps {
  redirectPath: string
}

class SignInForm extends React.Component<IProps, IState> implements ISignInForm {

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      connexionDone: isLogin()
    };
  }

  submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();
    const setError = () => this.setState({
      error: 'L\'adresse mail et/ou le mot de passe sont invalides. Veuillez réessayer s\'il vous plait.',
      password: '',
      email: ''
    });
    const validConnexion = () => this.setState({
      connexionDone: true
    });

    const user = new UserSignInDto(this.state.email, this.state.password);
    //call to the api
    login(user)
      .then(validConnexion)
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
    if (this.state.connexionDone)
      return <Redirect to={this.props.redirectPath} />;
    else {
      return (
        <div className="container" style={{ width: '75%', marginTop: '15%' }}>
          <h6 className="text-danger">{this.state.error}</h6>
          <form className="needs-validation">
            <div className="form-group" style={{ marginBottom: '8%' }} >
              <input name="email" type="email" className="form-control form-control-lg text-center" onChange={this.handleChange}
                placeholder="Adresse email" value={this.state.email} required />
            </div>
            <div className="form-group" style={{ marginBottom: '8%' }}>
              <input name="password" type="password" className="form-control form-control-lg text-center" onChange={this.handleChange}
                placeholder="Mot de passe" value={this.state.password} required />
            </div>
            <div className="form-group text-center" style={{ marginTop: '15%' }}>
              <button className="btn btn-outline-secondary btn-lg btn-block shadow" type="submit" onClick={this.submit}>Connexion</button>
              <p>Powered by Polytech Connect</p>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default SignInForm;