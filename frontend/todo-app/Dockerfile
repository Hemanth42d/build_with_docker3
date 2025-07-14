FROM node:20-alpine
ENV VITE_BASE_URL=http://localhost:3000

RUN mkdir -p /home/frontend-app
COPY . /home/frontend-app
WORKDIR /home/frontend-app
RUN npm install
CMD [ "npm", "run", "dev" ]