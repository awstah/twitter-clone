import config from "../config/config";

const Base = {
  apiUrl: (version = config.Default_API_VERSION) => {
    let baseUrl = "";
    switch (config.ENV) {
      case "testing":
        baseUrl = config.API_URL_TESTING;
        break;
      case "production":
        baseUrl = config.API_URL_PROD;
        break;
      default:
        // eslint-disable-next-line no-unused-vars
        baseUrl = config.API_URL_LOCAL;
        break;
    }
    return baseUrl + "/api";
  },
};

const API = {
  register: () => {
    return `${Base.apiUrl()}/auth/register`;
  },
  login: () => {
    return `${Base.apiUrl()}/auth/login`;
  },
  createPost: () => {
    return `${Base.apiUrl()}/posts`;
  },
  getTimeline: () => {
    return `${Base.apiUrl()}/posts/timeline/all`;
  },
};

export default API;
