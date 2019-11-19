import axios from 'axios';
import { API_URL } from './configApi.service';
import Mcq from '../models/mcq/mcq.model'

const request = require('request');

const sendQCM = async (qcm: Mcq ) => {
  const res = await axios
    .post(`${API_URL}/mcq`, qcm
 );
  return res;
};

const getQCM = async (idQcm: number) => {
  const res = await axios
    .get(`${API_URL}/mcq/${idQcm}`);
  return res.data
};

export { sendQCM, getQCM }