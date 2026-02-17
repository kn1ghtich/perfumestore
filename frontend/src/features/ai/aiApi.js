import { httpClient } from '../../api/httpClient';

export async function askAiConsultant(message) {
  const response = await httpClient.post('/ai-consultant/chat', { message });
  return response.data;
}
