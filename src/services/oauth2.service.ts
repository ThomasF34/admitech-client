import axios from 'axios';
import { setAuthToken, setToken, getAuthToken, removeAuthToken, removeToken } from './token.service';
import { isAdmin } from '../helpers/authorizationHelper';
const buildUrl = require('build-url');
const request = require('request');
const jwtDecode = require('jwt-decode');
const random = require('random')



const endPoints = {
  tokenEndPoint: "https://oauth.igpolytech.fr/token",
  refreshTokenEndPoint: "https://oauth.igpolytech.fr/refresh",
  authorizeEndPoint: "https://oauth.igpolytech.fr/authorize",
  admiTechServer: process.env.REACT_APP_MYDASH_CONNECTION_ROUTE
}

const headers = (token: string, refresh: boolean) => {
  return {
    'Authorization': 'Bearer ' + token,
    'Content-type': 'application/json',
    'refresh': refresh
  }
}

const token = async (data: any) => {
  const res = await axios.post(endPoints.tokenEndPoint, data);
  if (res.status === 200) {
    await admiTechToken(headers(res.data.access_token, false))
    setAuthToken("access_token", res.data.access_token)
    setAuthToken("refresh_token", res.data.refresh_token)
  }
};

const admiTechToken = async (headers: any) => {
  const options = {
    url: endPoints.admiTechServer,
    method: 'POST',
    headers: headers,
    form: {}
  }
  request(options, (error: any, response: any) => {
    if (!error && response.statusCode === 200) {
      setToken(response.body)
      if (!headers.refresh) {
        window.location.replace("/administration/accueil")
      }
    }
  })
}

const refreshToken = async () => {
  const current_time = Date.now() / 1000;
  const exp = jwtDecode(getAuthToken("access_token")).exp
  if (exp < current_time) {
    const refreshToken = getAuthToken("refresh_token");
    const res = await axios.post(endPoints.refreshTokenEndPoint, {
      client_id: client_id,
      refresh_token: refreshToken
    })
    if (res.status === 200) {
      removeAuthToken("access_token")
      setAuthToken("access_token", res.data.access_token)
      await admiTechToken(headers(res.data.access_token, true))
    }
  }

}

axios.interceptors.response.use((response) => {
  return response
}, async (error) => {
  if (error.response.data === "Token expired" && isAdmin()) {
    await refreshToken()
  }
  else {
    removeToken();
    window.location.reload()
  }
});

const client_id = process.env.REACT_APP_MYDASH_CLIENT_ID;
const redirectURI = process.env.REACT_APP_MYDASH_REDIRECT_API;
const authURL = (): string => {
  const state = random.int(1, 100);
  setAuthToken("state", state)
  return buildUrl(endPoints.authorizeEndPoint, {
    queryParams: {
      client_id: client_id,
      state: getAuthToken("state"),
      redirect_uri: redirectURI
    }
  })
}

export { token, authURL, client_id, refreshToken }