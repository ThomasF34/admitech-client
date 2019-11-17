import React from 'react';
import { isAdmin } from '../../../helpers/authorizationHelper';
import { IFields } from './createApplicationForm';
import SpecialityForm from './specialityForm';
import AdminForm from './adminForm';
import CivilForm from './civilForm';
import ALevelForm from './aLevelForm';

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  values: IFields
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
        admin: false
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
        <SpecialityForm handleChange={this.props.handleChange} values={this.props.values} />

        {/* ADMIN*/}
        {isAdmin() ? (
          <div className="col-md-12">

            <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("admin") }}
              style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
              <h4 className="text-white">Administration</h4>
            </button>

            <AdminForm isDisplayedBlock={this.state.AreDisplayedBlock["admin"]} handleChange={this.props.handleChange} values={this.props.values} />

          </div>
        ) : null}

        {/* ETAT CIVIL */}
        <div className="col-md-12">

          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("civil") }}
            style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Etat Civil</h4>
          </button>

          <CivilForm isDisplayedBlock={this.state.AreDisplayedBlock["civil"]} handleChange={this.props.handleChange} values={this.props.values} />

        </div>

        {/* BAC */}
        <div className="col-md-12">
          <button className="btn btn-lg btn-block shadow" onClick={(e) => { e.preventDefault(); this.changeDisplayMode("bac") }} style={{ backgroundColor: 'rgba(0, 204, 255, 0.863)', marginBottom: '1%' }}>
            <h4 className="text-white">Baccalauréat</h4>
          </button>

          <ALevelForm isDisplayedBlock={this.state.AreDisplayedBlock["bac"]} handleChange={this.props.handleChange} values={this.props.values} />
        </div>

      </div>
    );
  }
}

export default GlobalApplicationForm;