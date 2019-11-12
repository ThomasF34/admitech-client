import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from './authorizationHelper';

const PrivateStudentRoute = (component : any) => {
  return (
    isLoggedIn() ? component : <Redirect to="/connexion/etudiant" />
  );
};

const PrivateAdminRoute = ({ component }: any) => {
  return (
    isLoggedIn() ? component : <Redirect to="/connexion/administration" />
  );
};

const PrivateCompanyRoute = ({ component }: any) => {
  return (
    isLoggedIn() ? component : <Redirect to="/connexion/entreprise" />
  );
};

export { PrivateStudentRoute, PrivateAdminRoute, PrivateCompanyRoute };