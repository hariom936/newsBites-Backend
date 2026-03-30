export const auth = {
  TOKEN_EXPIRED: {
    errorMessage: 'You login session has expired',
    newsBiteCode: 'newsBite_01003'
  },
  INVALID_TOKEN: {
    errorMessage: 'Invalid Login Token. Please login again',
    newsBiteCode: 'newsBite_01004'
  },
  AUTHORIZATION_ERROR: {
    errorMessage: "You don't have access to this section. Please reach out to your system administrator to get the access.",
    newsBiteCode: 'newsBite_01005'
  },
  SESSION_EXPIRE_TIME:{
    errorMessage: "Your session has been expired. Please log in again.",
    newsBiteCode: 'newsBite_01006'
  },
  SESSION_FORCE_LOGOUT:{
    errorMessage: "Your role has been updated. Please log in again.",
    newsBiteCode: 'newsBite_01007'
  },
  TOKEN_NOT_PROVIDED:{
    errorMessage: "Token is not provided ",
    newsBiteCode: null

  }
};
