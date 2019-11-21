import React from 'react';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import CreateApplicationForm from '../../student/createApplicationPage/createApplicationForm';

interface IProps {
  title: string,
  id: string | undefined
}
class StudentApplicationContainer extends React.Component<IProps> {

  render() {
    return (

      <div className="main-container" >
        <div className="row justify-content-md-center" >
          <div className="name-mainTitle" style={{ width: '100%' }}>
            {this.props.title}
          </div>
        </div>
        
          <CreateApplicationForm existingApplicationId={this.props.id} />
      
      </div>

    );
  }
}

export default StudentApplicationContainer;