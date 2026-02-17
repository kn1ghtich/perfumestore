import { useState } from 'react';
import { Alert, Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';

import { askAiConsultant } from '../features/ai/aiApi';

export function AiConsultantPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setAnswer('');
    setError('');

    try {
      const response = await askAiConsultant(question);
      setAnswer(response.answer);
    } catch (requestError) {
      setError(requestError?.response?.data?.message || 'AI-консультант недоступен');
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4">AI-консультант</Typography>
      <Typography color="text.secondary">
        Опиши любимые ноты, сезон, бюджет и куда будешь использовать аромат.
      </Typography>

      <Box component="form" onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField
            multiline
            minRows={4}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Например: Ищу свежий аромат на лето до 40 000 ₸..."
            required
          />
          <Button variant="contained" type="submit">
            Спросить AI
          </Button>
        </Stack>
      </Box>

      {answer ? (
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Ответ консультанта
            </Typography>
            <Typography>{answer}</Typography>
          </CardContent>
        </Card>
      ) : null}

      {error ? <Alert severity="error">{error}</Alert> : null}
    </Stack>
  );
}
