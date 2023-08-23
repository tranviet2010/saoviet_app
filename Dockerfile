# Build docker image.
# Sá»­ dung node
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build


FROM node:18-alpine as runner
WORKDIR /app
COPY . .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json


EXPOSE 3000

CMD ["npm", "run", "dev"]

