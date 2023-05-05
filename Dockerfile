FROM node:latest

ENV PORT=3000
EXPOSE 3000

COPY . .

RUN npm install

CMD node index.js