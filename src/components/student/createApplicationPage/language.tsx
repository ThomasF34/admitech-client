import React from 'react';
import { IFields } from './createApplicationForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  isDisplayedBlock: boolean,
  values: IFields,
  editMode: boolean
}

class Language extends React.Component<IProps>{
  render() {

    return (
      <div>
        {
          this.props.isDisplayedBlock ? (
            <div className="form-group border border-info rounded">

              <div style={{ padding: '2%' }}>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col-md-6">
                    <h6>Langue maternelle : </h6>
                    <input name="native_lang_name" type="text" className="form-control" placeholder={this.props.values.native_lang_name || "Langue maternelle"} value={this.props.values.native_lang_name} onChange={this.props.handleChange} disabled={!this.props.editMode} />
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>LV1 : </h6>
                    <input name="second_lang_name" type="text" className="form-control" placeholder={this.props.values.second_lang_name || "LV1"} value={this.props.values.second_lang_name} onChange={this.props.handleChange} disabled={!this.props.editMode} />
                  </div>
                  <div className="col">
                    <h6>Niveau LV1 : </h6>
                    <select name="second_lang_level" className="form-control" placeholder={this.props.values.second_lang_level || "Sélectionner une valeur"} value={this.props.values.second_lang_level} onChange={this.props.handleChange} disabled={!this.props.editMode}>
                      <option value="" >Selectionner ...</option>
                      <option value="great" selected={this.props.values.second_lang_level && this.props.values.second_lang_level.toLowerCase() === "great"} >Très bon</option>
                      <option value="medium" selected={this.props.values.second_lang_level && this.props.values.second_lang_level.toLowerCase() === "medium"}>Moyen</option>
                      <option value="basic" selected={this.props.values.second_lang_level && this.props.values.second_lang_level.toLowerCase() === "basic"}>Elémentaire</option>
                    </select>
                  </div>
                </div>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>LV2 : </h6>
                    <input name="third_lang_level" type="text" className="form-control" placeholder={this.props.values.third_lang_level || "LV2"} value={this.props.values.third_lang_level} onChange={this.props.handleChange} disabled={!this.props.editMode} />
                  </div>
                  <div className="col">
                    <h6>Niveau LV2 : </h6>
                    <select name="third_lang_name" className="form-control" placeholder={this.props.values.third_lang_name || "Sélectionner une valeur"} value={this.props.values.third_lang_name} onChange={this.props.handleChange} disabled={!this.props.editMode}>
                      <option value="" >Selectionner ...</option>
                      <option value="great" selected={this.props.values.third_lang_name && this.props.values.third_lang_name.toLowerCase() === "great"} >Très bon</option>
                      <option value="medium" selected={this.props.values.third_lang_name && this.props.values.third_lang_name.toLowerCase() === "medium"}>Moyen</option>
                      <option value="basic" selected={this.props.values.third_lang_name && this.props.values.third_lang_name.toLowerCase() === "basic"}>Elémentaire</option>
                    </select>
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

export default Language;