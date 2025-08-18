# Use Node.js v20 official image
FROM node:20-alpine

# Set working directory in container
WORKDIR /app

# Copy only dependency files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Now copy the rest of the app
COPY . .

# Start the app
CMD ["npm", "start"]
