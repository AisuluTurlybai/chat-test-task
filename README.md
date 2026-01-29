# Тестовое задание: Чат-приложение (React + Node.js)

## Стек технологий
- React + TypeScript
- Vite
- Node.js + Express
- OpenAI API
- Web Speech API (голосовой ввод)

## Функциональность
- Поле ввода текста и отправка сообщения
- Голосовой ввод (преобразование речи в текст)
- Backend API `/api/chat`
- Интеграция с OpenAI API на стороне сервера
- Fallback-ответ (mock) при превышении лимита OpenAI API

## Запуск проекта локально

### Backend
```bash
cd chat-backend
npm install
# создать файл .env
# добавить переменную:
# OPENAI_API_KEY=ваш_api_ключ
node index.js
Backend будет доступен по адресу:
http://localhost:3001

### Frontend
cd chat-frontend
npm install
npm run dev
Frontend будет доступен по адресу:
http://localhost:5173

## Project structure
- chat-frontend — React + TypeScript (Vite)
- chat-backend — Node.js + Express API

## Notes
- OpenAI API используется на backend
- Если лимит API превышен, используется mock-ответ (fallback)
- Голосовой ввод реализован через Web Speech API
