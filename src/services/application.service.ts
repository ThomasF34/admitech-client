import axios from 'axios';
import * as config from './configApi.service';
import Application from '../models/application/application';
import { getToken } from './token.service';

const getSingleApplication = async (id:string) => {
  const res = await axios
    .get(`${config.API_URL}/candidature/${id}`,
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
  return res;
};
 
const createApplication = async (application: Application) => {
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
  return res;
};


export { createApplication, myApplications, getSingleApplication };

