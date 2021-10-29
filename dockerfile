FROM node:16.13.0

RUN git config --global user.email "sendami.tech@gmail.com"
RUN git config --global user.name "sendami-tech"
RUN yarn config set strict-ssl false
RUN yarn config set registry https://registry.npmjs.org

WORKDIR /sendami-tech-blog

COPY package*.json ./

RUN yarn install

EXPOSE 3000