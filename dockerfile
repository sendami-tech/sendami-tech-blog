# syntax=docker/dockerfile:1.2

FROM node:16.13.0

RUN git config --global user.email "sendami.tech@gmail.com"
RUN git config --global user.name "sendami-tech"
RUN npm config set strict-ssl false
RUN npm config set registry https://registry.npmjs.org

WORKDIR /sendami-tech-blog

COPY package*.json ./

RUN npm install

EXPOSE 3000