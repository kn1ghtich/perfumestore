import { Card, CardContent, Grid2, Typography } from '@mui/material';

const features = [
  {
    title: 'Онлайн каталог',
    description: 'Удобный просмотр ароматов по брендам, полу, сезону и цене.'
  },
  {
    title: 'Безопасная авторизация',
    description: 'Регистрация и вход в личный кабинет с JWT авторизацией.'
  },
  {
    title: 'AI-консультант',
    description: 'Подбор аромата по предпочтениям, стилю и бюджету.'
  }
];

export function HomePage() {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Добро пожаловать в Perfume Store
      </Typography>
      <Typography sx={{ mb: 3 }} color="text.secondary">
        Дипломный проект: интернет-магазин парфюмерии с AI-консультантом.
      </Typography>

      <Grid2 container spacing={2}>
        {features.map((feature) => (
          <Grid2 key={feature.title} size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
