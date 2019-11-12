import { getToken } from '../services/token.service';
import decoder from 'jwt-decode';

interface IToken {
  fname: string,
  lname: string,
  role: string,
  email: string

}
const getTokenJson = (): IToken | null => {
  const token = getToken()
  if (token != null) {
    console.log(decoder(token))
    const decoded = decoder<IToken>(token);
    return decoded;
  }
  return null;
}
const getRole = (): string | null => {
  const decoded = getTokenJson();
  if (typeof decoded == "object" && decoded != null)
    return decoded.role;
  else
    return null;
}
const getUsername = (): string | null => {

  const decoded = getTokenJson();
  if (typeof decoded == "object" && decoded != null)
    return decoded.lname + " " + decoded.fname;
  else
    return null;
}

const isLogin = (): boolean => getToken() != null;


export { isLogin, getUsername };