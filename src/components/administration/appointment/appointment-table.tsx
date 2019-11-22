import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { getId } from '../../../helpers/authorizationHelper'
import { number } from 'prop-types';

interface IState {
  listOfAppointment: {idCandidature : number, date: Date}[]
  //Formation, date
}


// Ce qu'il faut faire,  récupérer l'id du token => On récupère les candidatures à partir de là on map pour récupérer tous les entretiens. 


interface IProps {
}

class AppointmentTable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      listOfAppointment: []
    }

  }

  async componentDidMount() {
    let id = getId()
  }

  

  render() {
    return (
      <div className='container'>
        <Link to={'/administration/qcm/nouveau'} style={{ textDecoration: 'none' }}>
          <button className="btn btn-outline-success btn-sm  mt-4 mb-4 float-right">Créer un QCM</button>
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Identifiant de la Candidature</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {

              this.state.listOfAppointment.map(qcm => (

                <tr>
                  <th scope="row">{qcm.title}</th>
                  <td>{qcm.formation}</td>
                  <td>{qcm.origin}</td>
                  <td>
                    <Link to={`/administration/qcm/voir/${qcm.id}`} style={{ textDecoration: 'none' }}>
                      <button type="button" className="btn btn-outline-primary btn-sm mr-3 mb-sm-1">Aperçu</button>
                    </Link>
                    <button type="button" className="btn btn-outline-danger btn-sm " onClick={() => this.deleteItem(qcm.id)}>Supprimer</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    )
  }
}

export default QuizzManagement;