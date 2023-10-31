const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants")

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  let env;
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      env = {
        MONGODB_USER: "",
        MONGODB_PASSWORD: "",
        MONGODB_CLUSTER: "",
        MONGODB_DATABASE: "",
        MONGODB_COLLECTION: ""
      };
      break;
    case PHASE_PRODUCTION_BUILD:
      env = {
        MONGODB_USER: "",
        MONGODB_PASSWORD: "",
        MONGODB_CLUSTER: "",
        MONGODB_DATABASE: "",
        MONGODB_COLLECTION: ""
      };
      break;
  
    default:
      env = {
        MONGODB_USER: "",
        MONGODB_PASSWORD: "",
        MONGODB_CLUSTER: "",
        MONGODB_DATABASE: "",
        MONGODB_COLLECTION: ""
      };
      break;
  }

  return {
    reactStrictMode: true,
    //env: env
  };
}

module.exports = nextConfig
