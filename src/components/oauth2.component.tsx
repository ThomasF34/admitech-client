import React from 'react';
import Loader from 'react-loader-spinner'
import { client_id,token } from '../services/oauth2.service'
import { removeAuthToken } from '../services/token.service';



class  WaitToken extends React.Component {
    async componentDidMount() {
      const url=window.location.search
     const decodedUrl=decodeURIComponent(url)
      let search = new URLSearchParams(decodedUrl);
      if(search.get("state")===localStorage.getItem("state") && search.get("state") !==null ){
        removeAuthToken("state")
        const data ={client_id:client_id,code:search.get("code")};
        await token(data);
      }
    }
    render(){
        return(
          <div
          style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
          }}
          >

          <h1 style={{
              position: 'absolute', left: '50%', top: '-60%',
              transform: 'translate(-50%, -50%)'
          }}> Connexion en cours...</h1>
    
       <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
 
       />
        </div>

          
          
           );
    }

}

export default WaitToken;
