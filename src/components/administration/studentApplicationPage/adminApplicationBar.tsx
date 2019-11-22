import React from 'react';
import { giveMCQ, giveJury, decision, notCompleteApplication, valideMCQ } from '../../../helpers/statusHelper';
import ConfirmationPopUp from '../../helpers/ConfirmationPopUp';
import { updateStatusApplication } from '../../../services/administration/applications/application.service';

interface IProps {
  idApplication: string | undefined,
  status: string | undefined
}

interface IState {
  changedStatus: number | null
}

class AdminApplicationBar extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {
      changedStatus: null
    };
  }


  getUserActionPopUp = async (action: any) => {
    if (action === 'valid' && this.props.idApplication && this.state.changedStatus) {
      await updateStatusApplication(this.props.idApplication, this.state.changedStatus)
      window.location.reload()
      this.setState({ changedStatus: null })
    }
    else {
      this.setState({ changedStatus: null })
    }
  }


  changeStatus = (newStatus: number) => {
    this.setState({
      changedStatus: newStatus
    })
  }

  messagePopUp = `Etes vous sur de vouloir valider votre choix ? Cette action est irréversible.`

  /*[0, 'Tous'],
        [1, 'Brouillon'],
        [2, 'Soumis'],
        [3, 'Dossier incomplet'],
        [4, 'Dossier complet'],
        [5, 'QCM à effectuer'],
        [6, 'QCM effecuté'],
        [7, 'Entretien à programmer'],
        [8, 'Entretien programmé'],
        [9, 'Entretien passé'], 
        [10, 'Admis'],
        [11, 'Refusé']*/
  render() {

    return (
      <div className="fill-container shadow-lg" style={{ backgroundColor: 'rgb(163, 162, 162)' }}>


        {giveMCQ(this.props.status) ? (
          <div>
            <h2 className="text-light text-center" style={{ marginTop: '8%' }}>QCM</h2>
            <div className="row justify-content-md-center" style={{ marginTop: '8%' }}>
              <div className="col-5 col-sm-5 col-lg-6">
                <button className="btn btn-light btn-outline-info btn-lg btn-block shadow" type="submit" >QCM</button>
                <small className="text-light">Assigner un QCM</small>
              </div>
            </div>
          </div>
        ) : null}

        {valideMCQ(this.props.status) ? (
          <div>
            {/* METTRE ICI LA NOTE OBTENUE */}
            <h2 className="text-light text-center" style={{ marginTop: '8%' }}>QCM</h2>
            <div className="row justify-content-md-center" style={{ marginTop: '8%' }}>
              <div className="col-5 col-sm-5 col-lg-6">
                <button className="btn btn-light btn-outline-info btn-lg btn-block shadow" type="submit" onClick={() => this.changeStatus(7)}>Valider</button>
                <small className="text-light">OK pour entretien</small>
              </div>
            </div>
          </div>
        ) : null}


        {giveJury(this.props.status) ? (
          <div>
            <h2 className="text-light text-center" style={{ marginTop: '8%' }}>ENTRETIEN</h2>
            <div className="row justify-content-md-center" style={{ marginTop: '8%' }}>
              <div className="col-5 col-sm-5 col-lg-6">
                <button className="btn btn-light btn-outline-info btn-lg btn-block shadow" type="submit" >Jury</button>
                <small className="text-light">Assigner un jury</small>
              </div>
            </div>
          </div>
        ) : null}


        {decision(this.props.status) ? (
          <div>
            <h2 className="text-light text-center" style={{ marginTop: '8%' }}>DECISION</h2>
            <div className="row justify-content-md-center" style={{ marginTop: '8%' }}>
              <div className="col-5 col-sm-5 col-lg-6">
                <button className="btn btn-success btn-lg btn-block shadow" type="submit" onClick={() => this.changeStatus(10)} >Accepter</button>
              </div>
            </div>

            <div className="row justify-content-md-center" style={{ marginTop: '5%' }}>
              <div className="col-5 col-sm-5 col-lg-6">
                <button className="btn btn-danger btn-lg btn-block shadow" type="submit" onClick={() => this.changeStatus(11)}>Refuser</button>
              </div>
            </div>

          </div>

        ) : null
        }

        {
          notCompleteApplication(this.props.status) ? (
            <div>
              <h2 className="text-light text-center" style={{ marginTop: '8%' }}>DOSSIER</h2>
              <div className="row justify-content-md-center" style={{ marginTop: '8%' }}>
                <div className="col-5 col-sm-5 col-lg-6">
                  <button className="btn btn-light btn-outline-success btn-lg btn-block shadow" type="submit" onClick={() => this.changeStatus(4)}>Complet</button>
                </div>
              </div>
              <div className="row justify-content-md-center" style={{ marginTop: '5%' }}>

                <div className="col-5 col-sm-5 col-lg-6">
                  <button className="btn btn-light btn-outline-danger btn-lg btn-block shadow" type="submit" onClick={() => this.changeStatus(3)}>Incomplet</button>
                </div>
              </div>
            </div>
          ) : null
        }

        <ConfirmationPopUp title='Confirmation' content={this.messagePopUp} show={this.state.changedStatus !== null} onClose={this.getUserActionPopUp} />

      </div >

    );
  }
}

export default AdminApplicationBar;