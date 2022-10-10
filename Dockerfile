# Step 1

FROM node:16-alpine as build-step

RUN mkdir /ktn

WORKDIR /ktn

COPY package.json /ktn

#COPY .env.production /dapp-rinz

RUN npm install

COPY . /ktn
RUN npm run build


# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /ktn/build /usr/share/nginx/html
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf