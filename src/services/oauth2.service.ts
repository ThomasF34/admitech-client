
import axios from 'axios';
import { setAuthToken, setToken, getAuthToken, removeAuthToken } from './token.service';

import { cpus } from 'os';
const buildUrl = require('build-url');
const request = require('request');
const jwtDecode = require('jwt-decode');




const endPoints={
  tokenEndPoint:"https://oauth.igpolytech.fr/token",
  refreshTokenEndPoint:"https://oauth.igpolytech.fr/refresh",
  authorizeEndPoint: "https://oauth.igpolytech.fr/authorize",
  admiTechServer:"https://test-api-admitech.igpolytech.fr/utilisateur/connexionMyDash"
}

const headers = (token:string)=>{
  return {'Authorization':'Bearer '+token,
  'Content-type': 'application/json'
}
}

const token = async (data:any) => {
const res = await axios.post(endPoints.tokenEndPoint,data);
        if (res.status === 200){
          await admiTechToken(headers(res.data.access_token))
          setAuthToken("access_token",res.data.access_token)
          setAuthToken("refresh_token",res.data.refresh_token)
                        }
      };

const admiTechToken= async (headers:any)=>{
  const options = {
    url: endPoints.admiTechServer,
    method: 'POST',
    headers: headers,
    form: {}
    }
  request(options,  (error:any, response:any)=> {
    if (!error && response.statusCode === 200) {
       setToken(response.body)
       window.location.replace("/administration/accueil")
    }
})
}

const refreshToken= async()=>
{
  const current_time = Date.now() / 1000;
  const exp=jwtDecode(getAuthToken("access_token")).exp
  if ( exp < current_time && exp) {
    const refreshToken=getAuthToken("refresh_token");
    const res = await axios.post(endPoints.refreshTokenEndPoint,{
      client_id:client_id,
      access_token:refreshToken
    });
    if (res.status === 200){
      removeAuthToken("access_token")
      setAuthToken("access_token",res.data.refresh_token)
       await admiTechToken(headers(res.data.access_token))
                    }

  }

}

const state = 13445644;
const client_id='b065ce17-b210-43a9-8409-8e58ca67fe1a';
const redirectURI="http://localhost:3000/oauth"
const authURL=buildUrl(endPoints.authorizeEndPoint, {
  queryParams: {
    client_id: client_id,
    state:state,
    redirect_uri: redirectURI
  }
})


export{token,authURL,state,client_id}