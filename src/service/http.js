import axios from 'axios';
import { LOCAL_STORAGE_ENTRIES } from '../utils/constants';

class Http {
  constructor() {
    const service = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        common: {
          Accept: 'application/json',
        },
      },
    });

    service.interceptors.request.use(
      (config) => {
        const { token } = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_ENTRIES.user)
        );
        config.headers.common.Authorization = `Bearer ${token}`;

        return config;
      },
      (error) => Promise.reject(error)
    );
    this.service = service;
  }

  get(path) {
    return this.service.get(path);
  }

  post(path, payload) {
    return this.service.post(path, payload);
  }

  put(path, payload) {
    return this.service.put(path, payload);
  }

  delete(path, payload) {
    return this.service.delete(path, payload);
  }
}
export default new Http();
