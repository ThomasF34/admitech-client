import axios from 'axios';
import * as config from './configApi.service';
import { getToken } from './token.service';

export const getAllMcq = async () => {
  const res = await axios
    .get(`${config.API_MCQ}/mcq`,
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
  return res;
};

export const getMarkMcq = async (idMCQ: string) => {
  const res = await axios
    .get(`${config.API_MCQ}/candidate/${idMCQ}/note`,
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
  return res;
};


export const affectMcq = async (idApplication: string, idMCQ: string) => {
  const res = await axios
    .put(`${config.API_MCQ}/attribute/${idMCQ}/${idApplication}`,
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
  return res;
};