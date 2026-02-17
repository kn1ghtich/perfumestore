import { useState } from 'react';
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material';

import { login } from '../features/auth/authApi';

export function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    try {
      const result = await login(form);
      setMessage(`Привет, ${result.user.firstName}!`);
    } catch (requestError) {
      setError(requestError?.response?.data?.message || 'Ошибка входа');
    }
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: 420 }}>
      <Typography variant="h4" gutterBottom>
        Вход
      </Typography>

      <Stack spacing={2}>
        <TextField label="Email" name="email" value={form.email} onChange={onChange} required />
        <TextField
          label="Пароль"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          required
        />

        <Button variant="contained" type="submit">
          Войти
        </Button>

        {message ? <Alert severity="success">{message}</Alert> : null}
        {error ? <Alert severity="error">{error}</Alert> : null}
      </Stack>
    </Box>
  );
}
