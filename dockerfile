FROM node:10.15.0

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY *.json ./

USER node
COPY . ./home/node/app

RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]
