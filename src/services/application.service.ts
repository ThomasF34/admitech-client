import axios from 'axios';
import * as config from './configApi.service';
import Application from '../models/application/application';


const draftApplication = async (application: Application) => {
  const res = await axios
    .post(`${config.API_URL}/candidature`, {
      first_name: application.first_name,
      last_name: application.last_name,
      nationnality: application.nationnality,
      birth_place: application.birth_place,
      draft:true
    });
  return res;
};

export { draftApplication };

