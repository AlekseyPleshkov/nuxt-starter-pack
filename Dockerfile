FROM node:8.11.4

RUN mkdir -p /root/app
COPY . /root/app

WORKDIR /root/app

COPY package*.json /root/app

RUN npm install

ENV NODE_ENV=production

COPY . /root/app
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "start"]