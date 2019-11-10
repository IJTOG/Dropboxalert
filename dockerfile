FROM node:boron

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . ./usr/src/app
USER node

RUN npm install
RUN npm build

CMD [ "npm", "start" ]
