import { httpClient, setAccessToken } from '../../api/httpClient';

export async function login(payload) {
  const response = await httpClient.post('/auth/login', payload);
  const accessToken = response.data?.tokens?.accessToken;

  if (accessToken) {
    setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);
  }

  return response.data;
}

export async function register(payload) {
  const response = await httpClient.post('/auth/register', payload);
  return response.data;
}
