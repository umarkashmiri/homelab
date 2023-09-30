FROM node:lts as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Serve Application using Nginx Server

FROM nginx:latest

COPY --from=build /app/dist/home-lab-client /usr/share/nginx/html

EXPOSE 80
