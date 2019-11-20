import axios from 'axios';
import { API_URL } from './configApi.service';
import Mcq from '../models/mcq/mcq.model'
import McqPreview from '../models/mcq/mcqPreview.model';

const sendQCM = async (qcm: Mcq) => {
  const res = await axios
    .post(`${API_URL}/mcq`, qcm
    );
  return res;
};

// Student version
const getQCM = async (idQcm: number) => {
  const res = await axios
    .get(`${API_URL}/mcq/${idQcm}`);
  return res.data
};

// Admin version
const getQCMAdmin = async (idQcm: number) => {
  const res = await axios
    .get(`${API_URL}/mcqAdmin/${idQcm}`);
  const result: Mcq = res.data
  return result
};

const deleteQCM = async (id: number) => {
  const res = await axios
    .delete(`${API_URL}/mcq/${id}`);
  return res;
};


const getPreviewQCM = async () => {
  try {
    const res = await axios
      .get(`${API_URL}/mcqs`);
    const data: McqPreview[] = res.data.mcqs
    return data
  } catch (error) {
    throw error.response;
  }
};

export { sendQCM, getQCM, getPreviewQCM, deleteQCM, getQCMAdmin }