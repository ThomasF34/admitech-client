import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import McqPreview from '../../../models/mcq/mcqPreview.model';
import {getPreviewQCM} from '../../../services/qcm.service'

interface IState {
 listOfQCM : McqPreview[]
}

interface IProps {
}

class QuizzManagement extends React.Component<IProps, IState> { 
  constructor(props: IProps) {
    super(props)
    this.state = {
      listOfQCM: []
    }
    

  }

  componentDidMount() {
    const res = getPreviewQCM()
    res.then((responses) => {
      if (responses !== undefined) {
        this.setState({ listOfQCM: responses })
      }
    })
  }

  render() {
    return (
      <div className='container'>
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
                    <button type="button" className="btn btn-outline-danger btn-sm ">Supprimer</button>
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