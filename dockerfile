FROM node:10.15.0

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY *.json ./

USER node
COPY /src /home/node/app/src

RUN npm install

CMD [ "npm","run", "dev" ]
