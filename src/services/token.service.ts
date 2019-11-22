import { isAdmin } from "../helpers/authorizationHelper";

const tokenName = 'tokenAdmitech';
const getToken = () => {return localStorage.getItem(tokenName);}
const getAuthToken = (accessToken:string) => { return localStorage.getItem(accessToken); };

const setToken = (token: string) => { localStorage.setItem(tokenName, token); };
const setAuthToken = (tokenName: string,token: string) => { localStorage.setItem(tokenName, token); };

const removeToken = () => {
                        if(isAdmin()){
                            localStorage.removeItem("access_token");
                            localStorage.removeItem("refresh_token");
                        }
                        localStorage.removeItem(tokenName)
                    };
const removeAuthToken = (tokenName:string) => { localStorage.removeItem(tokenName);};


export { getToken, setToken, removeToken,getAuthToken,setAuthToken,removeAuthToken };