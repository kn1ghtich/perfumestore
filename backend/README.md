# Backend (Node.js + Express + Prisma + MongoDB)

Стартовый шаблон backend для дипломного проекта парфюмерного интернет-магазина с AI-консультантом.

## Структура

```text
backend/
  prisma/
    schema.prisma
  src/
    config/
      env.js
      mongo.js
      prisma.js
    middlewares/
      auth.middleware.js
      error.middleware.js
    modules/
      aiConsultant/
      auth/
      orders/
      products/
      users/
    mongo/
      models/
        chatHistory.model.js
    app.js
    server.js
  .env.example
  package.json
```

## Что хранится где

- **PostgreSQL + Prisma**: пользователи, товары, заказы, позиции заказа.
- **MongoDB**: история диалогов с AI-консультантом.
- **Auth**: JWT access/refresh токены + bcrypt для пароля.

## Быстрый старт

1. Скопируй `.env.example` в `.env`.
2. Установи зависимости: `npm install`.
3. Подними PostgreSQL и MongoDB.
4. Выполни миграции Prisma: `npm run prisma:migrate`.
5. Запусти сервер: `npm run dev`.

## Следующий шаг

- Добавить валидацию входящих данных через `zod`.
- Добавить роли и админ-эндпоинты для управления каталогом.
- Добавить фильтры подбора аромата (ноты, стойкость, бюджет) в AI промпт.
