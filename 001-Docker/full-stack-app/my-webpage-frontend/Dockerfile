# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install dependencies
RUN npm install

# Expose the port that the backend will run on
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "run", "dev"]