import axios from 'axios';
import { setToken, removeToken } from './token.service';
import * as config from './configApi.service';
import UserSignInDto from '../models/user/userSignInDto';
import UserSignUpDto from '../models/user/userSignUpDto';

const login = async (user: UserSignInDto) => {
  const res = await axios
    .post(`${config.API_URL}/utilisateur/connexion`, {
      email: user.login,
      password: user.password
    });

  if (res.status === 200)
    setToken(res.data)

  return res;
};

const logout = () => {
  // remove user from local storage to log user out
  removeToken();
};

const signUp = async (user: UserSignUpDto) => {
  const res = await axios
    .post(`${config.API_URL}/utilisateur/inscrire`, {
      email: user.email,
      password: user.password,
      lname: user.lastname,
      fname: user.firstname,
      role: user.role
    });
  return res;
};

export { login, logout, signUp };

