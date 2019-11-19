import '../../../style/container.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import company from '../../../img/fond-polytech.jpeg';
import user from '../../../img/user.png';
import AdminNav from '../adminNav';
import axios from 'axios';
import { token } from '../../../services/oauth2.service';


class AdminHome extends React.Component {

  async componentDidMount() {
    const state=localStorage.getItem("state")
    const url=window.location.search
   const decodedUrl=decodeURIComponent("soufiane")
    let search = new URLSearchParams(decodedUrl);
    if(state!==undefined && search.get("state")===state){
      const data ={client_id:'o1-g1',code:search.get("code")};
     const tokenData= await token(data);
      //send the token to server
    }

    }

  

  render() {
      return (

        <div className="root fill ">
          <div className="row fill no-gutters">

            <div className="d-none d-md-block col-md-2 shadow-lg fill" >
              {/* should deal here with burger menu when small*/}
              <AdminNav userImage={user} userName="Membre Polytech" />

            </div>

            <div className="col-sm-12 col-md-10 fill">
              <div className="image-container">
                <img src={company} className="img-background" alt="polytech" />
              </div>


            </div>

          </div>
        </div>


      );
    }
}

export default AdminHome;