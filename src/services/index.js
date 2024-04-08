/*
 * Using this file we can configure the package which can be used for fetching information via API
 * Implemented with Axios - later can be modified with Javascript Fetch APIs
 */
import axios from "./config";

export const getRequest = async (url = "") => {
  return await axios.get(url);
};

export const getRequestWithParams = async (url = "", params = null) => {
  return await axios.get(url, params);
};

export const getRequestWithheaders = async (url = "", headers = null) => {
  return await axios.get(url, { headers });
};

export const postRequest = async (url = "", payload = null) => {
  return await axios.post(url, payload);
};

export const postRequestWithHeaders = async (
  url = "",
  payload = null,
  headers = {}
) => {
  return await axios.post(url, payload, { headers });
};
