export const TOKEN_KEY = "@mensalidade-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const loginAuth = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logoutAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
};
