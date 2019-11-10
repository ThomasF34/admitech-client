const tokenName = 'tokenAdmitech';

const getToken = () => { return localStorage.getItem(tokenName); };

const setToken = (token: string) => { localStorage.setItem(tokenName, token); };

const removeToken = () => { localStorage.removeItem(tokenName); };

export { getToken, setToken, removeToken };