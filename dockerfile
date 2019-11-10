FROM node:boron

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY *.json ./
COPY . ./usr/src/app
USER node

RUN npm install
RUN npm build

CMD [ "npm", "start" ]
