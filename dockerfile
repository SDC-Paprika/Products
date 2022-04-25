FROM node:16

# Create app directory
WORKDIR /usr/src/sdc

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Buncle app source
COPY . .

EXPOSE 6969

CMD [ "node", "server" ]
