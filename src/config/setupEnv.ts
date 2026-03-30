/**
 * Fetch all environment configuration from AWS SSM and any openID auth providers
 * and set them into the current environment
 * Any env already set will be overridden
 */


import mongoose from 'mongoose';
// Stop pluralization of mongoDb collection names
mongoose.pluralize(null);



const setupEnv = async () => {
  try {
    // List of env params for our app
    const parameterNames = [
      process.env.PORT as string,
      process.env.CORS_ORIGIN as string,
      process.env.DEV_ENVS as string,
      process.env.SWAGGER_DOMAIN as string,
      process.env.MONGO_DB_NAME as string,
      process.env.MONGO_URL as string,
      process.env.JWT_SECRET as string,
      process.env.JWT_ACCESS_EXPIRATION as string,
      
    ];

    const batchSize = 10; // Limit of params that SSM allows in one request
    const parameterChunks: string[][] = [];

    // Split the parameter names into batches
    for (let i = 0; i < parameterNames.length; i += batchSize) {
      const chunk = parameterNames.slice(i, i + batchSize);
      parameterChunks.push(chunk);
    }

    console.log('Setting up Environment');
    // Fetch parameters in batches

  } catch (error) {
    process.env.NODE_ENV !== 'local' && console.log(error);
    console.warn('\x1b[33m Unable to get configuration data. Falling back to .env \x1b[0m');
  }
};


export { setupEnv };
