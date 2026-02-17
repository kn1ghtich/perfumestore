import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '../components/layout/AppLayout';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AiConsultantPage } from '../pages/AiConsultantPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'catalog', element: <CatalogPage /> },
      { path: 'ai-consultant', element: <AiConsultantPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> }
    ]
  }
]);
