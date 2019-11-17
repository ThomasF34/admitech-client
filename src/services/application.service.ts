import axios from 'axios';
import * as config from './configApi.service';
import Application from '../models/application/application';
import { getToken } from './token.service';
import SoftApplication from '../models/application/softApplication';


const draftApplication = async (application: Application) => {
  const res = await axios
    .post(`${config.API_URL}/candidature`, application,
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
  return res;
};

const myApplications = async () => {
  const res = await axios
    .get(`${config.API_URL}/profil`,
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
    /*if(res.status==200){
      return res.data.candidatures
    }
      return null;*/
  return res;
};


const getApplications = (): SoftApplication[] | null=> {

  
console.log("retrieve data")
  let result = null

  myApplications()
    .then((res) => {console.log(res.data.candidatures[0]) ; result = [res.data.candidatures[0]]})
    .catch((e)=>{console.log(e)})
    console.log("result app : " + result)
    return result
}



export { draftApplication, getApplications, myApplications };

