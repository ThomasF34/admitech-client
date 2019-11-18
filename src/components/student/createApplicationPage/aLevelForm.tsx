import React from 'react';
import { IFields } from './createApplicationForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  isDisplayedBlock: boolean,
  values: IFields,
  editMode:boolean
}

class ALevelForm extends React.Component<IProps>{
  
  render() {

    return (
      <div>
        {
          this.props.isDisplayedBlock ? (
            <div className="form-group border border-info rounded" style={{ height: '95%' }}>

              <div style={{ padding: '2%' }}>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Bac : </h6>
                    <input name="bac_name" type="text" className="form-control" placeholder={this.props.values.bac_name || "Bac"} value={this.props.values.bac_name} onChange={this.props.handleChange} disabled={!this.props.editMode}/>
                  </div>
                  <div className="col">
                    <h6>Année : </h6>
                    <input name="bac_year" type="text" className="form-control" placeholder={this.props.values.bac_year || "Année"} value={this.props.values.bac_year} onChange={this.props.handleChange} disabled={!this.props.editMode}/>
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Mention : </h6>
                    <input name="bac_mention" type="text" className="form-control" placeholder={this.props.values.bac_mention ||"Mention"} value={this.props.values.bac_mention} onChange={this.props.handleChange} disabled={!this.props.editMode}/>
                  </div>
                  <div className="col">
                    <h6>Dénomination exacte : </h6>
                    <input name="bac_realname" type="text" className="form-control" placeholder={this.props.values.bac_realname ||"Dénomination exacte"} value={this.props.values.bac_realname} onChange={this.props.handleChange} disabled={!this.props.editMode}/>
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Nom de la formation suivie cette année : </h6>
                    <input name="last_facility_name" type="text" className="form-control" placeholder={this.props.values.last_facility_name ||"Nom de la formation"} value={this.props.values.last_facility_name} onChange={this.props.handleChange} disabled={!this.props.editMode}/>
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Adresse de l'établissement: </h6>
                    <input name="last_facility_address" type="text" className="form-control" placeholder={this.props.values.last_facility_address ||"Adresse de l'établissement"} value={this.props.values.last_facility_address} onChange={this.props.handleChange} disabled={!this.props.editMode}/>
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Code Postal : </h6>
                    <input name="last_facility_postal_code" type="text" className="form-control" placeholder={this.props.values.last_facility_postal_code ||"Code Postal" } value={this.props.values.last_facility_postal_code} onChange={this.props.handleChange} disabled={!this.props.editMode}/>
                  </div>
                  <div className="col">
                    <h6>Ville : </h6>
                    <input name="last_facility_city" type="text" className="form-control" placeholder={this.props.values.last_facility_city ||"Ville"} value={this.props.values.last_facility_city} onChange={this.props.handleChange} disabled={!this.props.editMode}/>
                  </div>
                  <div className="col">
                    <h6>Pays : </h6>
                    <input name="last_facility_state" type="text" className="form-control" placeholder={this.props.values.last_facility_state ||"Pays"} value={this.props.values.last_facility_state} onChange={this.props.handleChange} disabled={!this.props.editMode}/>
                  </div>
                </div>

              </div>
            </div>
          ) : null}

      </div>
    );
  }
}

export default ALevelForm;