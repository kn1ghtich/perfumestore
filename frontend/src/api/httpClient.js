import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1'
});

export function setAccessToken(token) {
  if (!token) {
    delete httpClient.defaults.headers.common.Authorization;
    return;
  }

  httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
}
