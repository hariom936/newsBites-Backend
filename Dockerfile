# Step 1: Use an official Node runtime as a parent image

FROM node:18.12.0

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/server

# Step 3: Copy package.json and package-lock.json (if available)
COPY . .


# Step 4: Install dependencies
RUN npm install

# # Step 5: Copy the rest of the application's source code from your host to the container
# COPY ./src ./src
# COPY ./.env ./
# COPY ./index.ts ./
# COPY ./.gitignore ./

# Step 6: Build your application
# RUN npm run build #when using typescript



# Step 7: Your app will be served on port 8000, expose this port
EXPOSE 3000

# Step 8: Define the command to run your app using CMD which defines your runtime. Assuming 'npm serve' is a valid script in your package.json
CMD [ "npm", "run", "serve" ]
