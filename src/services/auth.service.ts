import axios from 'axios';
import { setToken } from './token.service';
import * as config from './configApi.service';
import UserSignInDto from '../models/user/userSignInDto';

const login = async (user: UserSignInDto) => {
  const res = await axios
    .post(`${config.API_URL}/utilisateur/connexion`, {
      email: user.login,
      password: user.password
    });
  if (res.status === 201)
    setToken(res.data)
  return res;
};

export { login };