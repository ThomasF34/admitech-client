import React from 'react';
import { client_id,token,state } from '../services/oauth2.service'

class  WaitToken extends React.Component {
    async componentDidMount() {
      const url=window.location.search
     const decodedUrl=decodeURIComponent(url)
      let search = new URLSearchParams(decodedUrl);
      if(search.get("state")===state.toString()&& search.get("state") !==null ){
        const data ={client_id:client_id,code:search.get("code")};
        await token(data);
        window.location.replace("/administration/accueil")

        //send the token to server
      }
    }
    render(){
        return(
            <h1> Waiting access token...</h1>
        )
    }

}

export default WaitToken;
