import '../../../style/container.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import AdminNav from '../adminNav';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import ShowQuizz from './showForm'

function displayPage(id:number) {
  return (
    <div className="root fill ">
      <div className="row fill no-gutters">

          {/* should deal here with burger menu when small*/}
          <AdminNav userImage={user} userName="Membre Polytech" />

        <div className="col-sm-12 col-md-12 fill">
          <div className="image-container">
            <div className="main-container" >

              <div className="row no-gutters" style={{ width: '100%', height: '10%', padding: '0.7%' }}>
                <div className="w-100 shadow-lg white">
                  <div className="name-mainTitle" >
                    <Link to={'/administration/qcm/'} style={{ textDecoration: 'none' }}>
                      <button className="btn btn-outline-dark float-left" type="button">Retour</button>
                    </Link>
                    Aperçu du quizz
                    </div>
                </div>
              </div>
              <div className="row no-gutters " style={{ width: '100%', height: '80%', padding: '0.7%' }}>
                <div className="shadow-lg w-100 white">
                  <div className="row fill-container">
                    <div className="container">
                      <ShowQuizz idQcm={id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ShowQCMView() {
  const { id } = useParams()
  if (id !== undefined) {
    const newId = parseInt(id)
    return(displayPage(newId))
  } else {
    return (<h5>UNe erreur est survenue...</h5>)
  }
  }

export default ShowQCMView;