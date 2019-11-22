import React from 'react';
import { IFields } from './createApplicationForm';
import { isStudent, isAdmin } from '../../../helpers/authorizationHelper';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  values: IFields,
  errors: IFields,
  editMode: boolean
}

class SpecialityForm extends React.Component<IProps>{

  render() {

    return (

      <div className="container row align-items-end" style={{ padding: '2%' }}>

        <div className="col-6" >

          <div className="row">
            <h4 className="text-info">Candidature pour : </h4>
            <select name="branch" className="form-control" onChange={this.props.handleChange} disabled={isStudent() ? !this.props.editMode : true}>
              <option value="" >Selectionner ...</option>
              <option value="do" selected={this.props.values.branch && this.props.values.branch.toUpperCase() === "DO"}>DO</option>
              <option value="se" selected={this.props.values.branch && this.props.values.branch.toUpperCase() === "SE"}>SE</option>
            </select>
            <h6 className='text-danger'>{this.props.errors.branch}</h6>
            {isStudent() ?
              <div className="form-group">
                <div className="form-check">
                  <input name="certified" className="form-check-input input-lg" type="checkbox" checked={this.props.values.certified} onChange={this.props.handleChange} disabled={!this.props.editMode} />
                  <h6>Je certifie que toutes les informations renseignées sont correctes.</h6>
                </div>
                <h6 className='text-danger'>{this.props.errors.certified}</h6>
              </div>
              : null}
          </div>
        </div>

        {isAdmin() ?
          <div className="col-6" >
            <h6>Communication: </h6>
            <small>Message destiné a l'étudiant</small>
            <textarea name="public_admin_comment" className="form-control" placeholder={this.props.values.public_admin_comment || ""} value={this.props.values.public_admin_comment} onChange={this.props.handleChange} rows={3} disabled={!this.props.editMode} />
          </div>
          : null}

        {isStudent() ?
          <div className="col-6" >
            <h6 className="text-info">{this.props.values.public_admin_comment || ""}</h6>
          </div>
          : null}


      </div>

    );
  }
}

export default SpecialityForm;