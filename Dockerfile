FROM node:boron

# Create app directory
RUN mkdir -p /home/sanjay/Desktop/folder
WORKDIR /home/sanjay/Desktop/folder

# Install app dependencies
COPY package.json /home/sanjay/Desktop/folder
RUN npm install

# Bundle app source
COPY . /home/sanjay/Desktop/folder

EXPOSE 8080
CMD [ "npm", "start" ]

