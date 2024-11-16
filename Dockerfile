FROM node:22.11.0-bookworm AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/out /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
