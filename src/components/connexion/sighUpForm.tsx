import React from 'react';
interface ISignUpForm {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  submit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IState {
  firstName: string,
  lastName: string,
  password: string,
  confirmPassword: string,
  error: string,
  signUpDone: boolean
}

interface IProps {

}

class SignUpForm extends React.Component<IProps, IState> implements ISignUpForm {

  constructor(props: IProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      error: '',
      signUpDone: false
    };
  }

  submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {

    event.preventDefault();
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target != null) {
      switch (event.target.name) {
      case 'firstname':
        this.setState({
          firstName: event.target.value
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
    return (

      <div className="container" style={{ width: '75%', marginTop: '15%' }}>
        <form className="needs-validation">

          <div className="form-group" style={{ marginBottom: '8%' }} >
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
          </div>

          <div className="form-group">
            <div className="form-check">
              <input id="check" className="form-check-input input-lg" type="checkbox" required />
              J&apos;accepte les conditions générales d&apos;utilisation
            </div>
          </div>


          <div className="form-group text-center" style={{ marginTop: '15%', marginBottom: '10%' }}>
            <button className="btn btn-outline-secondary btn-lg btn-block shadow" type="submit">Créer votre compte</button>
          </div>
          <h5>Votre identifiant sera unique aux plateformes de Polytech.</h5>
        </form>
      </div>
    );
  }
}

export default SignUpForm;