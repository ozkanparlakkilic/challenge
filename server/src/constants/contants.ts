const REFRESH_TOKEN_EXPIRE = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // days, hours, minutes, seconds, milliseconds
const ACCESS_TOKEN_EXPIRE = new Date(Date.now() + 30 * 1000);

const ACCESS_TOKEN_COOKIE_OPTIONS = {
    httpOnly: true,
    expires: ACCESS_TOKEN_EXPIRE,
};

const REFRESH_TOKEN_COOKIE_OPTIONS = {
    httpOnly: true,
    expires: REFRESH_TOKEN_EXPIRE,
};

const TOKEN_ACCESS_KEYS = {
    USER_ACCESS_KEY: '$2a$12$wJbJ3ufChcEsd5/W/UgK0OFDiuvHDuwUwBG1AkroKFlnl1PvN1VDS', // useraccesskey string hashed with bycrypt
    USER_REFRESH_KEY: '$2a$12$7bSC6jbdhh/TLIP/VmizeeQ13.O8mxmaV1vfW9x1mxxlFtIxTO.DS', // userrefreshkey string hashed with bycrypt
};

export { ACCESS_TOKEN_COOKIE_OPTIONS, REFRESH_TOKEN_COOKIE_OPTIONS, TOKEN_ACCESS_KEYS };
