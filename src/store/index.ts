import Token from "../utils/token";

/**
 * 登录 token
 */
export const LoginTokenStore = new Token("AILU_ADMIN_LOGIN_TOKEN", 10 * 60 * 60 * 1000)