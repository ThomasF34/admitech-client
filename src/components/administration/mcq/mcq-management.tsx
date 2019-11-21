import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import McqPreview from '../../../models/mcq/mcqPreview.model';
import { getPreviewQCM, deleteQCM } from '../../../services/qcm.service'
import { Link } from 'react-router-dom';

interface IState {
  listOfQCM: McqPreview[]
}

interface IProps {
}

class QuizzManagement extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      listOfQCM: []
    }
    this.deleteItem =this.deleteItem.bind(this)
    
  }

  async componentDidMount() {
    const res = await getPreviewQCM()
    if (res !== undefined) {
        this.setState({ listOfQCM: res })
      }
  }

  deleteItem(id: number | undefined) {
    //AJouter le delete dans le state. 
    if (id !== undefined) {
      deleteQCM(id)
      const responses = this.state.listOfQCM;
      const res = responses.filter(elem => elem.id !== id)
      this.setState({ listOfQCM: res })
    }
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
              <th scope="col">Nom</th>
              <th scope="col">Formation</th>
              <th scope="col">Provenance</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {

              this.state.listOfQCM.map(qcm => (

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