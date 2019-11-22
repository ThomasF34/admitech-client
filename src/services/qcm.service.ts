import axios from 'axios';
import { QCM_URL } from './configApi.service';
import Mcq from '../models/mcq/mcq.model'
import McqPreview from '../models/mcq/mcqPreview.model';

const sendQCM = async (qcm: Mcq) => {
  const res = await axios
    .post(`${QCM_URL}/mcq`, qcm
    );
  return res;
};

// Student version
const getQCM = async (idQcm: number) => {
  const res = await axios
    .get(`${QCM_URL}/mcq/${idQcm}`);
  return res.data
};

// Admin version
const getQCMAdmin = async (idQcm: number) => {
  const res = await axios
    .get(`${QCM_URL}/mcqAdmin/${idQcm}`);
  const result: Mcq = res.data
  return result
};

const deleteQCM = async (id: number) => {
  const res = await axios
    .delete(`${QCM_URL}/mcq/${id}`);
  return res;
};


const getPreviewQCM = async () => {
  try {
    const res = await axios
      .get(`${QCM_URL}/mcqs`);
    const data: McqPreview[] = res.data.mcqs
    return data
  } catch (error) {
    throw error.response;
  }
};

const getQCMStudent = async (idCandidature: number) => {
  const res = await axios
    .get(`${QCM_URL}/candidate/${idCandidature}/mcq`);
  const result: Mcq = res.data
  return result
}

const sendQCMStudent = async (responses: any) => {
  const res = await axios
    .post(`${QCM_URL}/responseCandidat/`, responses);
  return res;
}

export { sendQCM, getQCM, getPreviewQCM, deleteQCM, getQCMAdmin, getQCMStudent, sendQCMStudent }