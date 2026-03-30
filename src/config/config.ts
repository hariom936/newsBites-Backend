const config = {
  env: process.env.NODE_ENV,
  showErrorStack: process.env.DEV_ENVS?.split(",").includes(
    process.env.NODE_ENV as string
  ),
  port: process.env.PORT ?? 8001,
  jwts: {
    secret: process.env.JWT_SECRET as string,
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION as string,
  },
  corsOptions: {
    origin: (origin, callback) => {
      if (
        process.env.CORS_ORIGIN === "*" ||
        process.env.CORS_ORIGIN?.split(",").indexOf(origin) !== -1
      ) {
        callback(null, true);
      } else {
        callback(new Error());
      }
    },
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  },
  // set the response headers config for helmet
  // ref https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
  contentSecurityDirectives: {
    defaultSrc: process.env.CORS_ORIGIN?.split(",") ?? "'self'",
    childSrc: ["'none'"],
    objectSrc: ["'none'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    scriptSrcElem: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    imgSrc: ["'self'", "'unsafe-inline'"],
  },

  SESSION_EXPIRE_TIME: Number(process.env.SESSION_EXPIRE_TIME) || 10,
  OTP_EXPIRE_TIME :5,
};

export default config;
