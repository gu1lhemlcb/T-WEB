FROM node:14

# Create app directory
WORKDIR /usr/src


RUN apt-get update


RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs


RUN apt-get -y install npm

# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY * /usr/src
RUN cd /usr/src/
RUN npm install


EXPOSE 3000
EXPOSE 22

CMD npm run dev
# CMD [ "node", "app.js" ]