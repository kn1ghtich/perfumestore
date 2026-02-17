const axios = require('axios');
const ChatHistory = require('../../mongo/models/chatHistory.model');
const { llamaApiKey, llamaApiUrl, llamaModel } = require('../../config/env');

async function ask({ userId, message }) {
  const response = await axios.post(
    llamaApiUrl,
    {
      model: llamaModel,
      messages: [
        {
          role: 'system',
          content:
            'Ты AI-консультант парфюмерного магазина. Уточняй предпочтения и предлагай релевантные ароматы.'
        },
        {
          role: 'user',
          content: message
        }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${llamaApiKey}`
      }
    }
  );

  const answer = response.data?.choices?.[0]?.message?.content || 'Извини, сейчас не могу ответить.';

  await ChatHistory.create({
    userId,
    question: message,
    answer
  });

  return { answer };
}

module.exports = { ask };
