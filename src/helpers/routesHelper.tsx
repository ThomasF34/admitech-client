import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAdmin, isStudent, isCompany, isLoggedIn } from './authorizationHelper';

const getRedirectionStudentPage = () => {
  if (isLoggedIn()) {
    if (isStudent())
      return '';
    else {
      if (isAdmin()) 
        return '/administration/accueil';
      else
      //is company
        return '/entreprise/accueil';
    }
  } else {
    return '/connexion/etudiant';
  }
};
const getRedirectionAdminPage = () => {
  if (isLoggedIn()) {
    if (isAdmin())
      return '';
    else {
      if (isStudent()) 
        return '/etudiant/accueil';
      else
      //is company
        return '/entreprise/accueil';
    }
  } else {
    return '/connexion/administration';
  }
};
const getRedirectionCompanyPage = () => {
  if (isLoggedIn()) {
    if (isCompany())
      return '';
    else {
      if (isAdmin()) 
        return '/administration/accueil';
      else
      //is student
        return '/etudiant/accueil';
    }
  } else {
    return '/connexion/entreprise';
  }
};

const PrivateStudentRoute = (component: any) => {
  const redirection = getRedirectionStudentPage();
  return (
    redirection==='' ? component : <Redirect to={redirection} push/>
  );
};

const PrivateAdminRoute = (component: any) => {
  const redirection = getRedirectionAdminPage();
  return (
    redirection==='' ? component : <Redirect to={redirection} push/>
  // isAdmin() ? component : <Redirect to="/connexion/administration" />
  );
};

const PrivateCompanyRoute = (component: any) => {
  const redirection = getRedirectionCompanyPage();
  return (
    redirection==='' ? component : <Redirect to={redirection} push/>
    //isCompany() ? component : <Redirect to="/connexion/entreprise" />
  );
};

const LoginRoute = (component: any) => {
  return (
    !isLoggedIn() ? component : <Redirect to="/" push/>
  );
};

export { PrivateStudentRoute, PrivateAdminRoute, PrivateCompanyRoute, LoginRoute };