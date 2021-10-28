FROM node:16.13.0

WORKDIR /sendami-tech-blog

COPY package*.json ./

RUN yarn install

EXPOSE 3000