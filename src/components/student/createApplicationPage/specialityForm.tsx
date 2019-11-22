import React from 'react';
import { IFields } from './createApplicationForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  values: IFields,
  errors: IFields,
  editMode: boolean
}

class SpecialityForm extends React.Component<IProps>{

  render() {

    return (

      <div className="container row align-items-end" style={{ padding: '2%' }}>
        <div className="col-6">
        <h4 className="text-info">Candidature pour : </h4>
        <select name="branch" className="form-control" onChange={this.props.handleChange} disabled={!this.props.editMode}>
          <option value="" >Selectionner ...</option>
          <option value="do" selected={this.props.values.branch && this.props.values.branch.toUpperCase() === "DO"}>DO</option>
          <option value="se" selected={this.props.values.branch && this.props.values.branch.toUpperCase() === "SE"}>SE</option>
        </select>
        <h6 className='text-danger'>{this.props.errors.branch}</h6>
        </div>
     
        <div className="col-6">
          <div className="form-group">
            <div className="form-check">
              <input name="certified" className="form-check-input input-lg" type="checkbox" checked={this.props.values.certified} onChange={this.props.handleChange} disabled={!this.props.editMode} />
              <h6>Je certifie que toutes les informations renseignées sont correctes.</h6>
            </div>
            <h6 className='text-danger'>{this.props.errors.certified}</h6>
          </div>
          </div>
      </div>

    );
  }
}

export default SpecialityForm;