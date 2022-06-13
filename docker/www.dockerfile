FROM node:lts AS builder

WORKDIR /usr/src/app

ARG APP_ENV

ENV APP_ENV=${APP_ENV}

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run nx -- build www

FROM node:lts AS www

WORKDIR /usr/src/app

# COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/dist/apps/www .

# RUN npm i --legacy-peer-deps

# EXPOSE 3000

CMD ["npm", "start"]
