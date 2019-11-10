import axios from 'axios';
import { setToken, removeToken, getToken } from './token.service';
import * as config from './configApi.service';
import UserSignInDto from '../models/user/userSignInDto';

const login = async (user: UserSignInDto) => {
  try {
    const res = await axios
      .post(`${config.API_URL}/utilisateur/connexion`, {
        login: user.login,
        password: user.password
      });
    setToken(res.data);
    return res.data;
  }
  catch (err) {
    console.log(err);
  }
};