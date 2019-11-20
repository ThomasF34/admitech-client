import React from 'react';
import Loader from 'react-loader-spinner'
import { client_id,token,state } from '../services/oauth2.service'



class  WaitToken extends React.Component {
    async componentDidMount() {
      const url=window.location.search
     const decodedUrl=decodeURIComponent(url)
      let search = new URLSearchParams(decodedUrl);
      if(search.get("state")===state.toString()&& search.get("state") !==null ){
        const data ={client_id:client_id,code:search.get("code")};
        await token(data);

      }
    }
    render(){
        return(
<div>
<div
          style={{
              position: 'absolute', left: '60%', top: '50%',
              transform: 'translate(-50%, -50%)'
          }}
          >
          <h1> Connexion en cours</h1>
          </div>
          <div
          style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
          }}
          >
       <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
 
       />
        </div>
</div>
          
          
           );
    }

}

export default WaitToken;
