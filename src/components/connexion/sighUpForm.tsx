import React from 'react';

class SignUpForm extends React.Component {

  render() {
    return (

      <div className="container" style={{ width: '75%', marginTop: '15%' }}>
        <form className="needs-validation">

          <div className="form-group" style={{ marginBottom: '8%' }} >
            <div className="form-group">
              <input id="lastName" type="text" className="form-control form-control-lg text-center" placeholder="Nom" required/>
            </div>
            <div className="form-group" >
              <input id="firstname" type="text" className="form-control form-control-lg text-center" placeholder="Prénom" required/>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '8%' }} >
            <div className="form-group">
              <input id="password" type="password" className="form-control form-control-lg text-center" placeholder="Mot de passe" minLength={6} required/>
            </div>
            <div className="form-group">
              <input id="confirm_password" type="password" className="form-control form-control-lg text-center" placeholder="Répétez votre mot de passe" minLength={6} required/>
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input id="check" className="form-check-input input-lg" type="checkbox" />
              J&apos;accepte les conditions générales d&apos;utilisation
            </div>
          </div>


          <div className="form-group text-center" style={{ marginTop: '15%',marginBottom: '10%' }}>
            <button className="btn btn-outline-secondary btn-lg btn-block shadow" type="submit">Créer votre compte</button>
          </div>
          <h5>Votre identifiant sera unique aux plateformes de Polytech.</h5>
        </form>
      </div>
    );
  }
}

export default SignUpForm;