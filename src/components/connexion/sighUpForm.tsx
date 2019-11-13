import React from 'react';
import UserSignUpDto from '../../models/user/userSignUpDto';
import { signUp } from '../../services/auth.service';
import { Redirect } from 'react-router';

interface ISignUpForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IState {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  confirmPassword: string,
  error: string,
  MatchingPwdError: string,
  signUpDone: boolean
}

interface IProps {
  redirectPath: string,
  role:string
}

class SignUpForm extends React.Component<IProps, IState> implements ISignUpForm {

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      error: '',
      MatchingPwdError: '',
      signUpDone: false
    };
  }

  submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {

    event.preventDefault();
    const validConnexion = () => this.setState({
      signUpDone: true
    });

    if (this.state.password !== this.state.confirmPassword)
      this.setState({
        MatchingPwdError: 'Les mots de passes ne sont pas identiques.'
      });
    else {
      const user = new UserSignUpDto(this.state.email, this.state.firstName, this.state.lastName, this.state.password, this.props.role);
      //call to the api
      signUp(user)
        .then(validConnexion)
        .catch();
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target != null) {
      switch (event.target.name) {
      case 'email':
        this.setState({
          email: event.target.value
        });
        break;
      case 'firstname':
        this.setState({
          firstName: event.target.value,
        });
        break;
      case 'lastname':
        this.setState({
          lastName: event.target.value
        });
        break;
      case 'password':
        this.setState({
          password: event.target.value
        });
        break;
      case 'confirm_password':
        this.setState({
          confirmPassword: event.target.value
        });
        break;
      }
    }
  }

  render() {
    if (this.state.signUpDone)
      return <Redirect to={this.props.redirectPath} />;
    else {
      return (

        <div className="container" style={{ width: '75%', marginTop: '15%' }}>
          <form className="needs-validation">

            <div className="form-group" style={{ marginBottom: '8%' }} >
              <div className="form-group">
                <input name="email" type="text" className="form-control form-control-lg text-center" placeholder="Adresse email"
                  onChange={this.handleChange} value={this.state.email} required />
              </div>
              <div className="form-group">
                <input name="lastname" type="text" className="form-control form-control-lg text-center" placeholder="Nom"
                  onChange={this.handleChange} value={this.state.lastName} required />
              </div>
              <div className="form-group" >
                <input name="firstname" type="text" className="form-control form-control-lg text-center" placeholder="Prénom"
                  onChange={this.handleChange} value={this.state.firstName} required />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '8%' }} >
              <div className="form-group">
                <input name="password" type="password" className="form-control form-control-lg text-center" placeholder="Mot de passe" minLength={6}
                  onChange={this.handleChange} value={this.state.password} required />
              </div>
              <div className="form-group">
                <input name="confirm_password" type="password" className="form-control form-control-lg text-center" placeholder="Répétez votre mot de passe" minLength={6}
                  onChange={this.handleChange} value={this.state.confirmPassword} required />
              </div>
              <h6 className="text-danger">{this.state.MatchingPwdError}</h6>
            </div>

            <div className="form-group">
              <div className="form-check">
                <input id="check" className="form-check-input input-lg" type="checkbox" required />
                J&apos;accepte les conditions générales d&apos;utilisation
              </div>
            </div>


            <div className="form-group text-center" style={{ marginTop: '15%', marginBottom: '10%' }}>
              <button className="btn btn-outline-secondary btn-lg btn-block shadow" type="submit" onClick={this.submit}>Créer votre compte</button>
            </div>
            <h5>Votre identifiant sera unique aux plateformes de Polytech.</h5>
          </form>
        </div>
      );
    }
  }
}

export default SignUpForm;