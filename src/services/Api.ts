import config from "../config/app";
import * as API from "../utils/api-helper";

const isProd: boolean = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

export const getPizzas = () => {
  const url = `${API_ENDPOINT}/ec196a02-aaf4-4c91-8f54-21e72f241b68/`;
  return API.get(url);
};
