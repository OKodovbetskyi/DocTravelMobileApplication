FROM node:14

WORKDIR /urs/src/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "NodeApp.js"]