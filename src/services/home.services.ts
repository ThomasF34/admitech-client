import axios from 'axios';
import * as API_URL from './configApi.service';

export const getHome = async () => {
  try {
    const home = await axios.get(`${API_URL}/api/home`);
    return home.data;
  }
  catch (error) {
    throw error.response;
  }
}