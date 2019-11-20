import { getToken } from '../services/token.service';
import decoder from 'jwt-decode';

interface IToken {
  first_name: string,
  last_name: string,
  role: string,
  email: string

}
const getTokenJson = (): IToken | null => {
  const token = getToken();
  if (token != null) {
    const decoded = decoder<IToken>(token);
    return decoded;
  }
  return null;
};
const getRole = (): string | null => {
  const decoded = getTokenJson();
  if (typeof decoded == 'object' && decoded != null){
    return decoded.role;
    

  }
  else
    return null;
};
const getEmail = (): string  => {
  const decoded = getTokenJson();
  if (typeof decoded == 'object' && decoded != null)
    return decoded.email;
  else
    return '';
};
const getUsername = (): string | null => {

  const decoded = getTokenJson();
  if (typeof decoded == 'object' && decoded != null)
    return decoded.last_name + ' ' + decoded.first_name;
  else
    return null;
};

const isLoggedIn = (): boolean => getToken() != null;
const isStudent = (): boolean => getRole() === 'eleve';
const isAdmin = (): boolean => getRole() === 'administration'|| getRole()==='professeur';
const isCompany = (): boolean => getRole() === 'entreprise';

export { isLoggedIn, getUsername, getRole, isStudent,isAdmin, isCompany, getEmail };