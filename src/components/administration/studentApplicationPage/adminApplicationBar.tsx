import React from 'react';
import { giveMCQ, giveJury, decision } from '../../../helpers/statusHelper';

interface IProps {
  idApplication: string | undefined,
  status: string | undefined
}

class AdminApplicationBar extends React.Component<IProps>{

  render() {

    return (
      <div className="fill-container shadow-lg" style={{ backgroundColor: 'rgb(163, 162, 162)' }}>
        <h4 color="white" className="text-center">Détail des étapes</h4>

        {giveMCQ(this.props.status) ? (
          <div className="col-5 col-sm-5 col-lg-2">
            <button className="btn btn-secondary btn-lg btn-block shadow" type="submit" >QCM</button>
            <small className="text-secondary">Assigner un QCM</small>
          </div>
        ) : null}
        {giveJury(this.props.status) ? (
          <div className="col-5 col-sm-5 col-lg-2">
            <button className="btn btn-secondary btn-lg btn-block shadow" type="submit" >Jury</button>
            <small className="text-secondary">Assigner un jury</small>
          </div>
        ) : null}
        {decision(this.props.status) ? (
          <div className='btn-group'>
            <div className="col-5 col-sm-5 col-lg-6">
              <button className="btn btn-success btn-lg btn-block shadow" type="submit" >Accepter</button>
            </div>
            <div className="col-5 col-sm-5 col-lg-6">
              <button className="btn btn-danger btn-lg btn-block shadow" type="submit" >Refuser</button>
            </div>
          </div>
        ) : null}

      </div>

    );
  }
}

export default AdminApplicationBar;