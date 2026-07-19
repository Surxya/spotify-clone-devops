# Use the exact light weight base image you specified
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy dependency manifests first to leverage Docker caching layers
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application source code
COPY . .

# Expose the API port
EXPOSE 5000

# Command to boot up the server script
CMD ["npm", "start"]
