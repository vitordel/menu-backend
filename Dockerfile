FROM node:latest

WORKDIR /usr/src/api

COPY . .
COPY ./.env.production ./.env

RUN yarn install --silent --ignore-optional --no-fund --log-level=error

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:prod"]