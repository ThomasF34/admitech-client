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

const deleteAttachmentInApplication = async (canId: number, attachId: number) => {
  const token = getToken();
  try {
    await axios.delete(`${config.API_URL}/candidature/${canId}/document/${attachId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  catch (error) {
    throw error.response;
  }
};

export { draftApplication, deleteAttachmentInApplication };

