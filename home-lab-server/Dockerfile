
FROM node:lts as build

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

#run app
CMD [ "node", "dist/main" ]