FROM node:12.18.0

# Папка приложения
ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Копирование файлов проекта
COPY . .

# Устанавливаем зависимости, собираем проект и удаляем зависимости
RUN npm install --production && npm run build:production && rm -rf node_module

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 7070

# Запуск проекта
CMD ["npm", "starst"]
