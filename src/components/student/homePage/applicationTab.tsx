import React from 'react';
import '../../../style/home.css';
import SoftApplication from '../../../models/application/softApplication';
import arrow from '../../../img/icons/right-arrow.png'
import { Link } from 'react-router-dom';

interface IProps {
  applications: SoftApplication[] | null,
}

interface IState {
  clickId: string | null,
}

interface ITab {
  tabApplications: SoftApplication[],
}

class TabApplication extends React.Component<ITab> {

  render() {
    return (
      <table className="table table-hover ">
        <thead>
          <tr className="text-info">
            <th scope="col"><h5>Spécialité</h5></th>
            <th scope="col"><h5>Etape</h5></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.props.tabApplications.map(application =>

            <tr key={application.id} >

              <th scope="row">{application.branch}</th>
              <td>{application.status}</td>

              <td>
                 <Link style={{ textDecoration: 'none' }} to={{
                  pathname: '/etudiant/candidature/'+application.id
                  
                }}>
                <img src={arrow} className="img-icon " alt="edit" />
                </Link>
              </td>

            </tr>

          )}

        </tbody>
      </table>
    );
  }
}

class ApplicationTab extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      clickId: null
    };
  }

  render() {
  
    return (
    
      <div style={{ width: '100%' }}>
        {(!this.props.applications) ?
          <h4 className="text-info"> Vous n'avez pas encore de candidatures en cours.</h4> :
          <div>
            {/*visible only on xl */}
            <div className="d-none d-xl-block" style={{ height: "200px", overflow: "auto" }}>
              <TabApplication tabApplications={this.props.applications} />
            </div>
            {/*visible only on lg */}
            <div className="d-none d-lg-block d-xl-none" style={{ height: "150px", overflow: "auto" }}>
              <TabApplication tabApplications={this.props.applications} />
            </div>
            {/*visible only on md */}
            <div className="d-none d-md-block d-lg-none" style={{ height: "200px", overflow: "auto" }}>
              <TabApplication tabApplications={this.props.applications} />
            </div>
            {/*visible only on sm */}
            <div className="d-none d-sm-block d-md-none" style={{ height: "150px", overflow: "auto" }}>
              <TabApplication tabApplications={this.props.applications} />
            </div>
            {/*visible only on xs */}
            <div className="d-block d-sm-none" style={{ height: "120px", overflow: "auto" }}>
              <TabApplication tabApplications={this.props.applications} />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default ApplicationTab;