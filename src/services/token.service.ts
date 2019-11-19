const tokenName = 'tokenAdmitech';
const getToken = () => { return localStorage.getItem(tokenName); };
const getAuthToken = (accessToken:string) => { return localStorage.getItem(accessToken); };

const setToken = (token: string) => { localStorage.setItem(tokenName, token); };
const setAuthToken = (tokenName: string,token: string) => { localStorage.setItem(tokenName, token); };

const removeToken = () => { localStorage.removeItem(tokenName);};
const removeAuthToken = (accessToken:string) => { localStorage.removeItem(accessToken);};


export { getToken, setToken, removeToken,getAuthToken,setAuthToken,removeAuthToken };