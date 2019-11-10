import axios from 'axios';
import { setToken } from './token.service';
import * as config from './configApi.service';
import UserSignInDto from '../models/user/userSignInDto';

const login = async (user: UserSignInDto) => {
  try {
    const res = await axios
      .post(`${config.API_URL}/utilisateur/connexion`, {
        login: user.login,
        password: user.password
      });
    switch (res.status) {
      case 200:
        setToken(res.data);
        console.log("200")
        return res.data;
      case 401:
          console.log("401")
    }

  }
  catch (err) {
    console.log("ERREUR INES "+err);
  }
};

export { login };