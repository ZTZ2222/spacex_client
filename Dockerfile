FROM node:14-alpine

WORKDIR /usr/src/spacex/client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install tailwindcss

RUN npm run build:tailwind

EXPOSE 3000

CMD ["npm", "start"]