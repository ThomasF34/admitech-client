import React from 'react';
import { IFields } from './createApplicationForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  isDisplayedBlock: boolean,
  values: IFields,
  errors: IFields,
  editMode: boolean
}

class ExperiencesForm extends React.Component<IProps>{

  render() {

    return (
      <div>
        {
          this.props.isDisplayedBlock ? (
            <div className="form-group border border-info rounded">
              <div style={{ padding: '2%' }}>

                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Stages : </h6>
                    <small>Stages ou expériences professionnelles (lieu, date, sujet traité...)</small>
                    <textarea name="internships" className="form-control" placeholder={this.props.values.internships || ""} value={this.props.values.internships} onChange={this.props.handleChange} rows={3} disabled={!this.props.editMode} />
                    <h6 className='text-danger'>{this.props.errors.internships}</h6>
                  </div>
                </div>
                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Informatique: </h6>
                    <small>Connaissance d’un langage, maîtrise d’un logiciel (à préciser)</small>
                    <textarea name="it_knowledge" className="form-control" placeholder={this.props.values.it_knowledge || ""} value={this.props.values.it_knowledge} onChange={this.props.handleChange} rows={3} disabled={!this.props.editMode} />
                    <h6 className='text-danger'>{this.props.errors.it_knowledge}</h6>
                  </div>
                </div>
                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Points Forts: </h6>
                    <small>Fournir le ou les champs disciplinaires où vous vous estimez particulièrement compétent(e) (ex : électronique, mathématiques...)</small>
                    <textarea name="strengths" className="form-control" placeholder={this.props.values.strengths || ""} value={this.props.values.strengths} onChange={this.props.handleChange} rows={3} disabled={!this.props.editMode} />
                    <h6 className='text-danger'>{this.props.errors.strengths}</h6>
                  </div>
                </div>
                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Centres d'interêts: </h6>
                    <small>Sports pratiqués et/ou centres d’intérêt</small>
                    <textarea name="sports_interests" className="form-control" placeholder={this.props.values.sports_interests || ""} value={this.props.values.sports_interests} onChange={this.props.handleChange} rows={3} disabled={!this.props.editMode} />
                    <h6 className='text-danger'>{this.props.errors.sports_interests}</h6>
                  </div>
                </div>
                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Voyages: </h6>
                    <small>Séjours significatifs à l’étranger (pays, durée, activité)</small>
                    <textarea name="travels" className="form-control" placeholder={this.props.values.travels || ""} value={this.props.values.travels} onChange={this.props.handleChange} rows={3} disabled={!this.props.editMode} />
                    <h6 className='text-danger'>{this.props.errors.travels}</h6>
                  </div>
                </div>
                <div className="row" style={{ padding: '5px' }}>
                  <div className="col">
                    <h6>Commentaire: </h6>
                    <small>Laissez un commentaire quelconque à l'attention de l'administration</small>
                    <textarea name="candidate_comment" className="form-control" placeholder={this.props.values.candidate_comment || ""} value={this.props.values.candidate_comment} onChange={this.props.handleChange} rows={3} disabled={!this.props.editMode} />
                    <h6 className='text-danger'>{this.props.errors.candidate_comment}</h6>
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

export default ExperiencesForm;