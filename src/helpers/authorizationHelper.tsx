import { getToken } from "../services/token.service"


const isLogin = (): boolean => getToken() != null


export { isLogin };