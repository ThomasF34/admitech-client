import React from 'react';
import CreateApplicationForm, { IFields } from '../../student/createApplicationPage/createApplicationForm';
import { getSingleApplication } from '../../../services/application.service';
import { doMCQ, chooseInterview } from '../../../helpers/statusHelper';

interface IProps {
  idApplication: string | undefined
}

interface IState {
  values: IFields
}

class StudentApplicationFormContainer extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {
      values: {}
    }
  }


  componentDidMount() {
    console.log(this.props.idApplication)
    if (this.props.idApplication !== undefined) {

      getSingleApplication(this.props.idApplication)
        .then(res => {
          this.setState({
            values: res.data
          });
        })
        .catch((e) => console.log(e))
    }
  }

  render() {

    return (
      <div className="row">

        <div className="col-sm-12 col-md-12 fill">
          <div className="col-sm-6 col-md-3 fill">
            {doMCQ(this.state.values.status) ? (
              <div className="col-5 col-sm-5 col-lg-6">
                <button className="btn btn-secondary btn-lg btn-block shadow" type="submit" >QCM</button>
                <small className="text-secondary">Effectuer votre QCM</small>
              </div>
            ) : null}
            {chooseInterview(this.state.values.status) ? (
              <div className="col-5 col-sm-5 col-lg-6">
                <button className="btn btn-secondary btn-lg btn-block shadow" type="submit" >Entretien</button>
                <small className="text-secondary">Programmer votre entretien</small>
              </div>
            ) : null}
          </div>
          <CreateApplicationForm editMode={false} values={this.state.values} />
        </div>
      </div>
    );
  }
}

export default StudentApplicationFormContainer;