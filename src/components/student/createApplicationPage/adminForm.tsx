import React from 'react';
import { IFields } from './createApplicationForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  isDisplayedBlock: boolean,
  values: IFields
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
                    <h6>Commentaire: </h6>
                    <textarea name="admin_comment" className="form-control" placeholder={this.props.values.admin_comment || "Commentaire"} value={this.props.values.admin_comment} onChange={this.props.handleChange} rows={3} />
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

export default AdminForm;