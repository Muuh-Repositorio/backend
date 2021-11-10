FROM node:alpine

COPY . /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

CMD npm run start:dev