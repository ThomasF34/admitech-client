import axios from 'axios';
import * as config from './../../configApi.service';
import { getToken } from './../../token.service';

const getAllApplications = async () => {
  const res = await axios
    .get(`${config.API_URL}/candidature`,
    {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  );
return res;
};

const updateStatusApplication = async (id: string, status: number) => {
  const res = await axios
    .put(`${config.API_URL}/candidature/${id}/status`, {"status":status},
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
  return res;
};

const getMCQS = async () => {
  const res = await axios
    .get(`${config.MCQ_SERVICE_URL}`,
    {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  );
  return res;
};

export { getAllApplications, updateStatusApplication, getMCQS };