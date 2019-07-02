FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install

RUN npm install -g bower && \
    echo '{ "allow_root": true }' > /root/.bowerrc

RUN npm install grunt-cli
RUN apk add --no-cache git

COPY bower.json .
RUN bower install

COPY . .

CMD node_modules/.bin/grunt serve