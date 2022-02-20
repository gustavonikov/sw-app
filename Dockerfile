FROM node:16.14.0-alpine as dev

WORKDIR /app

COPY package*.json .

RUN npm install
RUN npm install react-scripts@5.0.0

COPY . .

CMD ["npm", "start"]
