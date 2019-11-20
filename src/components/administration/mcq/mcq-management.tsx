import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import McqPreview from '../../../models/mcq/mcqPreview.model';
import { getPreviewQCM, deleteQCM } from '../../../services/qcm.service'

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
        console.log(res)
        this.setState({ listOfQCM: res })
      }
  }

  deleteItem(id: number | undefined) {
    //AJouter le delete dans le state. 
    console.log(id)
    if (id !== undefined) {
      const res = deleteQCM(id)
      console.log(res)
    }
  }

  render() {
    return (
      <div className='container'>
        <button className="btn btn-outline-success btn-sm  mt-4 mb-4 float-right">Créer un QCM</button>
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
                    <button type="button" className="btn btn-outline-primary btn-sm mr-3 mb-sm-1">Aperçu</button>
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