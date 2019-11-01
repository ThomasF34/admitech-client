import React from 'react';

class SignInForm extends React.Component {

  render() {
    return (

      <div className="container" style={{ width: '75%', marginTop: '15%' }}>
        <form>
          <div className="form-group" style={{ marginBottom: '8%' }} >
            <input type="text" className="form-control form-control-lg text-center" placeholder="Adresse email" />
          </div>
          <div className="form-group" style={{ marginBottom: '8%' }}>
            <input type="form-group" className="form-control form-control-lg text-center" placeholder="Mot de passe" />
          </div>
          <div className="form-group text-center" style={{ marginTop: '15%' }}>
            <button className="btn btn-outline-secondary btn-lg btn-block shadow">Connexion</button>
            <p>Powered by Polytech Connect</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;