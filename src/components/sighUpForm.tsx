import React from 'react';

class SignUpForm extends React.Component {

  render() {
    return (

      <div className="container" style={{ width: '75%', marginTop: '15%' }}>
        <form>

          <div className="form-group" style={{ marginBottom: '8%' }} >
            <div className="form-group">
              <input type="text" className="form-control form-control-lg text-center" placeholder="Nom" />
            </div>
            <div className="form-group" >
              <input type="text" className="form-control form-control-lg text-center" placeholder="Prénom" />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '8%' }} >
            <div className="form-group">
              <input type="text" className="form-control form-control-lg text-center" placeholder="Mot de passe" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg text-center" placeholder="Répétez votre mot de passe" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input input-lg" type="checkbox" id="gridCheck" />
              J&apos;accepte les conditions générales de d&apos;utilisation
            </div>
          </div>


          <div className="form-group text-center" style={{ marginTop: '15%',marginBottom: '10%' }}>
            <button className="btn btn-outline-secondary btn-light btn-lg btn-block ">Connexion</button>
          </div>
          <h5>Votre identifiant sera unique aux plateformes de Polytech.</h5>
        </form>
      </div>
    );
  }
}

export default SignUpForm;