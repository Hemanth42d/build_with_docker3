FROM node:20-alpine
ENV MONGO_DB_USERNAME=admin\
    MONGO_DB_PWD=password

RUN mkdir -p /home/backend-app
COPY . /home/backend-app
WORKDIR /home/backend-app
RUN npm install
CMD [ "node", "index.js" ]
