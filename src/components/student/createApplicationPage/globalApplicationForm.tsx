import React from 'react';
import { isAdmin, isStudent, getId } from '../../../helpers/authorizationHelper';
import { IFields } from './createApplicationForm';
import SpecialityForm from './specialityForm';
import AdminForm from './adminForm';
import CivilForm from './civilForm';
import ALevelForm from './aLevelForm';
import FileContainer, { IAttachement } from './filesContainer';
import ExperiencesForm from './experiencesForm';
import { Experiences } from '../../../models/application/application';
import LanguageForm from './languageForm';
import OtherApplyForm from './otherApplyForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  handleExperiencesChange: (elems: Experiences[]) => void,
  handleAttachmentsChange: (elems: IAttachement[]) => void,
  values: IFields,
  experiences: Array<Experiences>,
  attachments: Array<IAttachement>,
  editMode: boolean
}

interface IState {
  AreDisplayedBlock: IFields
}
class GlobalApplicationForm extends React.Component<IProps, IState>{

  constructor(props: IProps) {
    super(props);
    this.state = {
      AreDisplayedBlock: {
        civil: false,
        bac: false,
        admin: false,
        fichiers: false,
        plus: false,
        langue: false,
        other_apply: false,
        scolaire: false
      },
    };
  }

  changeDisplayMode = (blockName: string) => {
    const newDisplayedBlocks = this.state.AreDisplayedBlock
    newDisplayedBlocks[blockName] = !this.state.AreDisplayedBlock[blockName]
    this.setState({
      AreDisplayedBlock: newDisplayedBlocks
    })
  }

  render() {
    return (
      <div>
        {/* SPECIALITE */}
        <SpecialityForm handleChange={this.props.handleChange} values={this.props.values} editMode={isStudent() ? this.props.editMode : false} />

        {/* ADMIN*/}
        {isAdmin() ? (
          <div className="col-md-12">

            <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("admin") }}
              style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
              <h4 className="text-white">Administration</h4>
            </button>

            <AdminForm isDisplayedBlock={this.state.AreDisplayedBlock["admin"]} handleChange={this.props.handleChange} values={this.props.values} editMode={isAdmin() ? this.props.editMode : false} />

          </div>
        ) : null}

        {/* ETAT CIVIL */}
        <div className="col-md-12">

          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("civil") }}
            style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Etat Civil</h4>
          </button>

          <CivilForm isDisplayedBlock={this.state.AreDisplayedBlock["civil"]} handleChange={this.props.handleChange} values={this.props.values} editMode={isStudent() ? this.props.editMode : false} />

        </div>

        {/* BAC */}
        <div className="col-md-12">
          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("bac") }} style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Baccalauréat</h4>
          </button>

          <ALevelForm isDisplayedBlock={this.state.AreDisplayedBlock["bac"]} handleChange={this.props.handleChange} values={this.props.values} editMode={isStudent() ? this.props.editMode : false} />
        </div>

        {/* CONNAISSANCES LINGUISTIQUES */}
        <div className="col-md-12">
          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("langue") }} style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Connaissances Linguistiques</h4>
          </button>

          <LanguageForm isDisplayedBlock={this.state.AreDisplayedBlock["langue"]} handleChange={this.props.handleChange} values={this.props.values} editMode={isStudent() ? this.props.editMode : false} />
        </div>

        {/* PARCOURS SCOLAIRE */}
        <div className="col-md-12">
          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("scolaire") }} style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Parcours Scolaire</h4>
          </button>

          <ExperiencesForm isDisplayedBlock={this.state.AreDisplayedBlock["scolaire"]} experiences={this.props.experiences} handleChangeExperiences={this.props.handleExperiencesChange} editMode={isStudent() ? this.props.editMode : false} />
        </div>

        {/* EXPERIENCES */}
        <div className="col-md-12">
          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("plus") }} style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Expériences</h4>
          </button>

          <ExperiencesForm isDisplayedBlock={this.state.AreDisplayedBlock["plus"]} experiences={this.props.experiences} handleChangeExperiences={this.props.handleExperiencesChange} editMode={isStudent() ? this.props.editMode : false} />
        </div>

        {/* AUTRE CANDIDATURE */}
        <div className="col-md-12">
          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("other_apply") }} style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Autre candidature</h4>
          </button>

          <OtherApplyForm isDisplayedBlock={this.state.AreDisplayedBlock["other_apply"]} values={this.props.values} handleChange={this.props.handleChange} editMode={isStudent() ? this.props.editMode : false} />
        </div>

        {/* FICHIERS */}
        <div className="col-md-12">
          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("fichiers") }} style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Pièces Jointes</h4>
          </button>

          <FileContainer candId={getId()} isDisplayedBlock={this.state.AreDisplayedBlock["fichiers"]} attachments={this.props.attachments} handleChangeAttachement={this.props.handleAttachmentsChange} editMode={isStudent() ? this.props.editMode : false} />
        </div>

      </div>
    );
  }
}

export default GlobalApplicationForm;