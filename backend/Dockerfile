FROM node:12.20.1-alpine3.11
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait
CMD /wait && npm start
