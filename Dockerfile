FROM node:boron


RUN npm install -g yarn

# Create app directory
COPY . /app
WORKDIR /app

RUN yarn install

EXPOSE 3000
CMD [ "npm", "start" ]
