Сайт-приглашение Юрий & Виктория — Telegram RSVP

ВАЖНО:
- Файл не содержит токен бота.
- Никогда не вставляйте токен в index.html и не отправляйте его в чат.
- Telegram ID владельца задаётся в Netlify как переменная TELEGRAM_CHAT_ID.
- Токен BotFather задаётся в Netlify как TELEGRAM_BOT_TOKEN.

Для включения отправки RSVP:
1. Загрузите эту папку в приватный GitHub-репозиторий.
2. В Netlify выберите Add new site -> Import an existing project и подключите репозиторий.
3. После деплоя откройте Site configuration -> Environment variables.
4. Добавьте TELEGRAM_BOT_TOKEN со значением токена из BotFather.
5. Добавьте TELEGRAM_CHAT_ID со значением вашего Telegram ID.
6. Запустите повторный deploy.

После этого отправка анкеты будет вызывать Netlify Function и присылать ответ в Telegram.
Сначала проверьте тестовой отправкой с самого сайта.
