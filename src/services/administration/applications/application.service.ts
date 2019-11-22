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

const getSlotId = async (idApplication: number) => {
  const res = await axios
    .get(`${config.API_URL}/entretien/etudiant/${idApplication}`,
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

const getAllJuryMembers = async () => {
  const res = await axios
    .get(`${config.API_URL}/entretien/jury`,
    {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  );
  return res;
};


const assignJury = async(idApplication: number, idJury: Array<string>) => {
  const res = await axios
  .post(`${config.API_URL}/jury/affecter`, {"entretien_id":idApplication, "jurys_id":idJury},
    {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  );
  return res;
}

export { getAllApplications, updateStatusApplication, getAllJuryMembers, assignJury, getSlotId };