# inherit from a existing image to add the functionality
FROM node:20-alpine3.18

RUN apk upgrade --update -q \
  && apk --no-cache -q add git

# Set the working directory and assign ownership to the non-root user
WORKDIR /app

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

RUN npm run build

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["npm" , "start"]
