import axios from 'axios';
import * as config from './../../configApi.service';
import { getToken } from './../../token.service';

const addSlots = async (formation: string, startDate: string, endDate: string, duration: string) => {
  const res = await axios
    .post(`${config.API_URL}/entretien`, {"formation": formation, "begining_hour": startDate, "ending_hour": endDate, "duration": +duration},
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      }
    );
  return res;
};



export { addSlots };