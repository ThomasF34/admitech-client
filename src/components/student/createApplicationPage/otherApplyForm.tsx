import React from 'react';
import { IFields } from './createApplicationForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  isDisplayedBlock: boolean,
  values: IFields,
  errors: IFields,
  editMode: boolean
}

class OtherApplyForm extends React.Component<IProps>{
  render() {

    return (
      <div>
        {
          this.props.isDisplayedBlock ? (
            <div className="form-group border border-info rounded">

              <div style={{ padding: '2%' }}>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="form-group">
                    <div className="form-check">
                      <input name="other_apply" className="form-check-input input-lg" checked={this.props.values.other_apply} type="checkbox" onChange={this.props.handleChange} disabled={!this.props.editMode} />
                      <h6>Je suis inscrit(e) dans une autre formation.</h6>
                    </div>
                    <h6 className='text-danger'>{this.props.errors.other_apply}</h6>
                  </div>
                </div>

                <div>
                  {
                    this.props.values.other_apply ? (
                      <div>

                        <div className="row" style={{ padding: '5px' }}>
                          <div className="col">
                            <h6>Nom de la formation : </h6>
                            <input name="other_apply_name" type="text" className="form-control" placeholder={this.props.values.other_apply_name || "Nom de la formation"} value={this.props.values.other_apply_name} onChange={this.props.handleChange} disabled={!this.props.editMode} />
                            <h6 className='text-danger'>{this.props.errors.other_apply_name}</h6>
                          </div>
                          <div className="col">
                            <h6>Lieu de la formation : </h6>
                            <input name="other_apply_place" type="text" className="form-control" placeholder={this.props.values.other_apply_place || "Lieu de la formation"} value={this.props.values.other_apply_place} onChange={this.props.handleChange} disabled={!this.props.editMode} />
                            <h6 className='text-danger'>{this.props.errors.other_apply_place}</h6>
                          </div>
                        </div>

                        <div className="row" style={{ padding: '5px' }}>
                          <div className="form-group">
                            <div className="form-check">
                              <input name="other_apply_apprentise" className="form-check-input input-lg" checked={this.props.values.other_apply_apprentise} type="checkbox" onChange={this.props.handleChange} disabled={!this.props.editMode} />
                              <h6>C'est une formation en alternance</h6>
                            </div>
                            <h6 className='text-danger'>{this.props.errors.other_apply_apprentise}</h6>
                          </div>
                        </div>

                      </div>

                    ) : null
                  }
                </div>
              </div>
            </div>

          ) : null
        }
      </div>
    );
  }
}

export default OtherApplyForm;