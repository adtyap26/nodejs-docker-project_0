# Use alpine for lightweight distro
FROM node:10-alpine

# specify working directory and set file permission
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

# copy only files required to install
COPY package*.json ./

# use none root user
USER node

RUN npm install

COPY --chown=node:node . .

# indicate expected port 
EXPOSE 8080

CMD [ "node", "app.js" ]
