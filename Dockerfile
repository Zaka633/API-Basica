# Use an official Node.js LTS image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Bundle app source
COPY src ./src

# Expose the app port
EXPOSE 3000

# Environment variables (can be overridden by docker-compose or runtime)
ENV NODE_ENV=production \
    PORT=3000

# Start the app
CMD ["node", "src/app.js"]
