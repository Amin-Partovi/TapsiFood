# Step 1: Use an official Node.js image as the base
FROM node:22-alpine AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN yarn install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js app
RUN yarn build

# Step 7: Use a minimal Node.js runtime image for production
FROM node:18-alpine AS runner

# Step 8: Set the working directory
WORKDIR /app

# Step 9: Copy the built app from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Step 10: Expose the port
EXPOSE 3000

# Step 11: Start the Next.js app
CMD ["yarn", "start"]