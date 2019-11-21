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

      <div className="container col-sm-6 col-md-5 col-md-3" style={{ padding: '2%' }}>
        <h4 className="text-info">Candidature pour : </h4>
        <select name="branch" className="form-control" onChange={this.props.handleChange} disabled={!this.props.editMode}>
          <option value="" >Selectionner ...</option>
          <option value="do" selected={this.props.values.branch && this.props.values.branch.toUpperCase() === "DO"}>DO</option>
          <option value="se" selected={this.props.values.branch && this.props.values.branch.toUpperCase() === "SE"}>SE</option>
        </select>
        <h6 className='text-danger'>{this.props.errors.branch}</h6>
      </div>

    );
  }
}

export default SpecialityForm;