import axios from 'axios';
import * as config from './../../configApi.service';
import { getToken } from './../../token.service';

const getAvailableSlots = async (formation: string) => {
  const res = await axios
    .get(`${config.API_URL}/entretien/formation/${formation}/disponible`,
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
    return res;
};

const getMySlot = async (idApplicant: number) => {
    const res = await axios
      .get(`${config.API_URL}/entretien/etudiant/${idApplicant}`,
        {
          headers: { Authorization: `Bearer ${getToken()}` }
        }
      );
    return res;
};

const assignMySlot = async (idApplicant: number, idSlot: number) => {
    const res = await axios
      .put(`${config.API_URL}/entretien/etudiant/affecter`, {'candidature_id': idApplicant, 'entretien_id': idSlot},
        {
          headers: { Authorization: `Bearer ${getToken()}` }
        }
      );
    return res;
};

export { getAvailableSlots, getMySlot, assignMySlot };

