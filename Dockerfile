FROM node:18.10.0

WORKDIR /project

RUN npm i -g @angular/cli@15.2.2

EXPOSE 4200