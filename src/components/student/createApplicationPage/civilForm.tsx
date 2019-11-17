import React from 'react';
import { getEmail } from '../../../helpers/authorizationHelper';
import { IFields } from './createApplicationForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  isDisplayedBlock: boolean,
  values:IFields
}

class CivilForm extends React.Component<IProps>{
  render() {

    return (
      <div>
        {
          this.props.isDisplayedBlock ? (
            <div className="form-group border border-info rounded">

              <div style={{ padding: '2%' }}>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Nom : </h6>
                    <input name="last_name" type="text" className="form-control" placeholder={this.props.values.last_name ||"Nom"} value={this.props.values.last_name} onChange={this.props.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Prénom : </h6>
                    <input name="first_name" type="text" className="form-control" placeholder={this.props.values.first_name ||"Prénom"} value={this.props.values.first_name} onChange={this.props.handleChange} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Date de naissance : </h6>
                    <input name="birth_date" type="date" className="form-control" placeholder={this.props.values.birth_date ||"Date de naissance"} value={this.props.values.birth_date} onChange={this.props.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Lieu de naissance : </h6>
                    <input name="birth_place" type="text" className="form-control" placeholder={this.props.values.birth_place ||"Lieu de naissance"} value={this.props.values.birth_place} onChange={this.props.handleChange} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Nationalité : </h6>
                    <input name="nationnality" type="text" className="form-control" placeholder={this.props.values.nationnality ||"Nationalité"} value={this.props.values.nationnality} onChange={this.props.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Situation familiale : </h6>
                    <select name="family_status" className="form-control" placeholder={this.props.values.family_status ||"Sélectionner une valeur"} value={this.props.values.family_status} onChange={this.props.handleChange}>
                      <option value="" >Selectionner ...</option>
                      <option value="single" selected={this.props.values.family_status && this.props.values.family_status.toLowerCase()==="single"} >Célibataire</option>
                      <option value="married" selected={this.props.values.family_status && this.props.values.family_status.toLowerCase()==="married"}>Marié(e)</option>
                      <option value="other" selected={this.props.values.family_status && this.props.values.family_status.toLowerCase()==="other"}>Autre</option>
                    </select>
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Adresse : </h6>
                    <input name="address" type="text" className="form-control" placeholder={this.props.values.address ||"Adresse"} value={this.props.values.address} onChange={this.props.handleChange} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Code Postal : </h6>
                    <input name="postal_code" type="text" className="form-control" placeholder={this.props.values.postal_code ||"Code Postal"} value={this.props.values.postal_code} onChange={this.props.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Ville : </h6>
                    <input name="city" type="text" className="form-control" placeholder={this.props.values.city ||"Ville"} value={this.props.values.city} onChange={this.props.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Pays : </h6>
                    <input name="state" type="text" className="form-control" placeholder={this.props.values.state ||"Pays"} value={this.props.values.state} onChange={this.props.handleChange} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Téléphone : </h6>
                    <input name="phone" type="text" className="form-control" placeholder={this.props.values.phone ||"Téléphone"} value={this.props.values.phone} onChange={this.props.handleChange} />
                  </div>
                  <div className="col">
                    <h6>Email : </h6>
                    <input name="postal_code" type="text" className="form-control" placeholder={getEmail()} disabled />
                    <small className="text-danger">/!\ Cette adresse sera utilisée pour les échanges</small>
                  </div>
                </div>

              </div>
            </div>

          ) : null
        }
      </div>
    );
  }
}

export default CivilForm;