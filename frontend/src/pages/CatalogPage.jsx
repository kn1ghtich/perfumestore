import { useEffect, useState } from 'react';
import { Alert, Card, CardContent, CircularProgress, Grid2, Typography } from '@mui/material';

import { fetchProducts } from '../features/catalog/catalogApi';

export function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError('Не удалось загрузить товары. Проверь backend.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Каталог
      </Typography>

      <Grid2 container spacing={2}>
        {products.map((product) => (
          <Grid2 key={product.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="text.secondary">{product.brand}</Typography>
                <Typography sx={{ mt: 1 }}>{product.description}</Typography>
                <Typography sx={{ mt: 2, fontWeight: 700 }}>{product.price} ₸</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
