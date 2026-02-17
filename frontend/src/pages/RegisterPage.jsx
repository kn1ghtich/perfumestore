import { useState } from 'react';
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material';

import { register } from '../features/auth/authApi';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export function RegisterPage() {
  const [form, setForm] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage('');
    setError('');

    try {
      await register(form);
      setSuccessMessage('Регистрация успешна. Теперь можно войти.');
      setForm(initialForm);
    } catch (requestError) {
      setError(requestError?.response?.data?.message || 'Ошибка регистрации');
    }
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: 420 }}>
      <Typography variant="h4" gutterBottom>
        Регистрация
      </Typography>

      <Stack spacing={2}>
        <TextField label="Имя" name="firstName" value={form.firstName} onChange={onChange} required />
        <TextField label="Фамилия" name="lastName" value={form.lastName} onChange={onChange} required />
        <TextField label="Email" name="email" value={form.email} onChange={onChange} required />
        <TextField
          label="Пароль"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          required
        />

        <Button type="submit" variant="contained">
          Создать аккаунт
        </Button>

        {successMessage ? <Alert severity="success">{successMessage}</Alert> : null}
        {error ? <Alert severity="error">{error}</Alert> : null}
      </Stack>
    </Box>
  );
}
