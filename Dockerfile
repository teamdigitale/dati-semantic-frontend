# Build
FROM node:16-alpine3.11 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
COPY talisman ./talisman
RUN yarn install
COPY . ./
RUN yarn build

#Run
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
USER root
RUN chown -R nginx:nginx /usr/share/nginx/html
USER nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY docker/update-env.sh /docker-entrypoint.d