import axios from 'axios';
import * as config from './configApi.service';
import Application from '../models/application/application';
import { getToken } from './token.service';


const draftApplication = async (application: Application) => {
  const res = await axios
    .post(`${config.API_URL}/candidature`, application,
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
  return res;
};

const getAllApplications = async () => {
  const res = await axios
    .get(`${config.API_URL}/candidature`,
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
  return res;
};

export { draftApplication, getAllApplications };

