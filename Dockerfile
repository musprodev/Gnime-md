# Use an official Node.js image as a base image
FROM quay.io/astropeda/gnime-md

# Set the working directory inside the container
WORKDIR /root/Astropeda

# Clone the GitHub repository
RUN git clone https://github.com/Astropeda/gnime-md .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 5000

# Define environment variable for production
ENV NODE_ENV production

# Set the application entry point
CMD ["npm", "start"]
