import axios, { Method } from 'axios';
import { config } from '@config/index';

const request = axios.create({
  baseURL: config.baseApiUri,
  timeout: 5000,
  transformResponse: [
    function (data) {
      return data;
    },
  ],
});

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

async function Request<M = unknown, T = undefined>(
  method: Method,
  url: string,
  data: T,
  validateFunction: (res: any) => M,
): Promise<M> {
  const res = await request({ method, url, data });
  return validateFunction(JSON.parse(res.data));
}

export { Request };
