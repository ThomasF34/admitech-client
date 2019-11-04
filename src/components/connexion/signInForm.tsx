import React from 'react';

class SignInForm extends React.Component {

  render() {
    return (

      <div className="container" style={{ width: '75%', marginTop: '15%' }}>
        <form className="needs-validation">
          <div className="form-group" style={{ marginBottom: '8%' }} >
            <input id="email" type="email" className="form-control form-control-lg text-center" placeholder="Adresse email" required/>
          </div>
          <div className="form-group" style={{ marginBottom: '8%' }}>
            <input id="password" type="password" className="form-control form-control-lg text-center" placeholder="Mot de passe" required/>
          </div>
          <div className="form-group text-center" style={{ marginTop: '15%' }}>
            <button className="btn btn-outline-secondary btn-lg btn-block shadow" type="submit">Connexion</button>
            <p>Powered by Polytech Connect</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;