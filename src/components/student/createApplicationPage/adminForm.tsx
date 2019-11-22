import React from 'react';
import { IFields } from './createApplicationForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  saveAdminMessage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  isDisplayedBlock: boolean,
  values: IFields,
  errors: IFields,
  editMode: boolean
}

class AdminForm extends React.Component<IProps>{

  render() {

    return (
      <div>
        {
          this.props.isDisplayedBlock ? (
            <div className="form-group border border-info rounded">
              <div style={{ padding: '2%' }}>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Commentaire interne: </h6>
                    <textarea name="admin_comment" className="form-control" placeholder={this.props.values.admin_comment || "Commentaire"} value={this.props.values.admin_comment} onChange={this.props.handleChange} rows={3} disabled={!this.props.editMode} />
                    <small className="text-info">Ce commentaire ne sera pas visible pour l'étudiant </small>
                    <h6 className='text-danger'>{this.props.errors.admin_comment}</h6>
                  </div>
                </div>

              </div>

              <div className="col-6 col-sm-5 col-md-2 " style={{marginBottom:'1%'}}>
                <button className="btn btn-outline-info btn-lg btn-block shadow" type="submit" onClick={this.props.saveAdminMessage}>Enregistrer</button>
              </div>
            </div>

          ) : null
        }

      </div>
    );
  }
}

export default AdminForm;