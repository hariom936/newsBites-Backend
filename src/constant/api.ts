const versions = {
  V1: 'v1',
  SERVICE: 'service',
  ACTION: 'action'
};

const action = {
  ADD: '/add',
  LIST: '/list',
  UPDATE: '/update',
  DELETE: '/delete',
  DETAIL: '/detail',
  DROPDOWN: '/dropdown',
  DOWNLOAD: '/download',
  LINK: '/link',
  UNLINK: '/unlink',
  SENDOTP: '/send-otp',
  REGISTER: '/register',
  REFRESH_TOKEN: '/refreshToken',
  GENERATE_TOEKN: '/generateToken',
  VERIFYOTP: '/verify-otp',
  LOGIN: '/login',
  DISABLE_ENABLE:'/disable-enable',
  ADD_ADMIN:'/add-admin',
  ROLE:'/role',
  ACTIVATE:'/activate',

};


const component = {
  USER: 'user',
  SESSION: 'session',
  AUTH: 'auth',
  MASTERS: 'master',
  MAll:'mall',
  ROLE:'role'
};

const operations = {
  PROFILE: 'profile',
  BANNER: 'banner',
  MallList: 'malllist'
};

export { versions, component, action, operations };
