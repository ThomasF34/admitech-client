import React from 'react';
import CreateApplicationForm, { IFields } from '../../student/createApplicationPage/createApplicationForm';
import AdminApplicationBar from './adminApplicationBar';
import { getSingleApplication } from '../../../services/application.service';

interface IProps {
  idApplication: string | undefined
}

interface IState {
  values: IFields
}

class AdminApplicationFormContainer extends React.Component<IProps,IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {
      values : {}
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
      <div className= "row">
        <div className="col-sm-10 col-md-10 fill">
          <CreateApplicationForm editMode={false} values={this.state.values}/>
        </div>

        <div className="col-sm-2 col-md-2 fill">
          <AdminApplicationBar idApplication={this.props.idApplication} status={this.state.values.status}/>
        </div>
      </div>
    );
  }
}

export default AdminApplicationFormContainer;