import axios from 'axios';
const randomInt = require('random-int');
const buildUrl = require('build-url');

const endPoints={
  tokenEndPoint:"http://oauth-dev.igpolytech.fr/token",
  authorizeEndPoint: "http://oauth-dev.igpolytech.fr/authorize"
}

const token = async (data:any) => {
const res = await axios.post(endPoints.tokenEndPoint,data);
        if (res.status === 200){
            localStorage.removeItem("state");
              console.log(res.data)
              return res.data;
                        }
      };

const state = randomInt(10);
const client_id='o1-g1';
const redirectURI="htt://localhost:3000/administration/accueil"
const authURL=buildUrl(endPoints.authorizeEndPoint, {
  queryParams: {
    client_id: client_id,
    state:state,
    redirect_uri: redirectURI
  }
})


export{token,authURL}