import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLogin } from './authorizationHelper';

const PrivateStudentRoute = (component : any) => {
  return (
    isLogin() ? component : <Redirect to="/connexion/etudiant" />
  );
};

const PrivateAdminRoute = ({ component }: any) => {
  return (
    isLogin() ? component : <Redirect to="/connexion/administration" />
  );
};

const PrivateCompanyRoute = ({ component }: any) => {
  return (
    isLogin() ? component : <Redirect to="/connexion/entreprise" />
  );
};

export { PrivateStudentRoute, PrivateAdminRoute, PrivateCompanyRoute };