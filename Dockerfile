# Use an official Node.js runtime as the base image
FROM node:19

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the app dependencies using yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application files to the container
COPY . .

# Set environment variables
ENV PORT=5173

# Expose the port for the app to listen on
EXPOSE 5173

# Specify the command to run when the container starts
CMD [ "yarn", "dev" ]
