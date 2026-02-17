import { httpClient } from '../../api/httpClient';

export async function fetchProducts() {
  const response = await httpClient.get('/products');
  return response.data;
}
