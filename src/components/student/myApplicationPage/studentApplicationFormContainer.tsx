import React from 'react';
import CreateApplicationForm, { IFields } from '../../student/createApplicationPage/createApplicationForm';
import { getSingleApplication } from '../../../services/application.service';

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
          <CreateApplicationForm values={this.state.values} />
        </div>
      </div>
    );
  }
}

export default StudentApplicationFormContainer;