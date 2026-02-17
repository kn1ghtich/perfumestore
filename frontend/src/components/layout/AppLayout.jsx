import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Каталог' },
  { to: '/ai-consultant', label: 'AI Консультант' },
  { to: '/login', label: 'Вход' },
  { to: '/register', label: 'Регистрация' }
];

export function AppLayout() {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Perfume Store
          </Typography>

          <Stack direction="row" spacing={1}>
            {navItems.map((item) => (
              <Button key={item.to} color="inherit" component={RouterLink} to={item.to}>
                {item.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
