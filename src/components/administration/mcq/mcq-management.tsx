import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IState {

}

interface IProps {
}

class QuizzManagement extends React.Component<IProps, IState> { 
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

            <tr>
              <th scope="row">QCM-DO-1</th>
              <td>DO</td>
              <td>DUT</td>
              <td>
                <button type="button" className="btn btn-outline-primary btn-sm mr-3 mb-sm-1">Modifier</button>
                <button type="button" className="btn btn-outline-danger btn-sm ">Supprimer</button>
              </td>
            </tr>

            
          </tbody>
          </table>
      </div>

    )
  }
}

export default QuizzManagement;