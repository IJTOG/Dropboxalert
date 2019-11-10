FROM node:10.15.0

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY *.json ./

USER node
COPY . ./usr/src/app

RUN npm install
RUN npm build

CMD [ "npm", "start" ]
