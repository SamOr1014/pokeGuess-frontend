FROM node:20 as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
