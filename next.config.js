const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants")

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  let env;
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      env = {
        MONGODB_USER: "admin",
        MONGODB_PASSWORD: "admin",
        MONGODB_CLUSTER: "NextJS",
        MONGODB_DATABASE: "test-site",
        MONGODB_COLLECTION: "contact-messages"
      };
      break;
    case PHASE_PRODUCTION_BUILD:
      env = {
        MONGODB_USER: "admin",
        MONGODB_PASSWORD: "admin",
        MONGODB_CLUSTER: "NextJS",
        MONGODB_DATABASE: "built-site",
        MONGODB_COLLECTION: "contact-messages"
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
    env: env
  };
}

module.exports = nextConfig
