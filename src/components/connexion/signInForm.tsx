import React from 'react';
import UserSignInDto from '../../models/user/userSignInDto';
import { login } from '../../services/auth.service';

interface ISignInForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IState {
  email: string,
  password: string
}

interface IProps {
}

class SignInForm extends React.Component<IProps, IState> implements ISignInForm {
  submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
   const user = new UserSignInDto(this.state.email, this.state.password)
    event.preventDefault();
    login(user).then(x => console.log("ok"))
      .catch(y => console.log("not ok"))
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

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }


  render() {
    return (

      <div className="container" style={{ width: '75%', marginTop: '15%' }}>
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

export default SignInForm;