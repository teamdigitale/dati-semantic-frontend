# Build
FROM node:16-alpine3.11 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
ARG CUSTOM_ENV
RUN yarn install --silent
RUN CUSTOM_ENV=$CUSTOM_ENV yarn build

#Run
FROM registry.redhat.io/rhel8/nginx-120
COPY --from=build /app/build .
ADD nginx/*.conf "${NGINX_CONFIGURATION_PATH}"
CMD nginx -g "daemon off;"