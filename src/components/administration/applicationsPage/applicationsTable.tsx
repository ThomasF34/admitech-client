import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/applications.css';
import SearchBar from '../../helpers/searchBar';

class ApplicationsTable extends React.Component {

  render() {
    return (

      <div>
        <SearchBar />
        <table className="table table-hover">
          <thead>
            <tr className="text-info">
              <th scope="col">Etape</th>
              <th scope="col">Spécialité</th>
              <th scope="col">N° Dossier</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">QCM à effectuer</th>
              <td>IG</td>
              <td>123456</td>
              <td>Mark</td>
              <td>Otto</td>

            </tr>
            <tr>
              <th scope="row">Dossier Incomplet</th>
              <td>DO</td>
              <td>789456</td>
              <td>Jacob</td>
              <td>Thornton</td>

            </tr>
            <tr className="table-danger">
              <th scope="row">REFUSE</th>
              <td>IG</td>
              <td>111756</td>
              <td>Jean</td>
              <td>Dubois</td>
            </tr>

            <tr>
              <th scope="row">Entretien à programmer</th>
              <td>IG</td>
              <td>354976</td>
              <td>Lilia</td>
              <td>Forb</td>
            </tr>

            <tr className="table-success">
              <th scope="row">ADMIS</th>
              <td>DO</td>
              <td>184675</td>
              <td>Jeanne</td>
              <td>Bertrand</td>
            </tr>

          </tbody>
        </table>
      </div>

    );
  }
}

export default ApplicationsTable;