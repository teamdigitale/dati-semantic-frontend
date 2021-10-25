# Build
FROM node:16-alpine3.11 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
ARG CUSTOM_ENV
RUN yarn install --silent
RUN CUSTOM_ENV=$CUSTOM_ENV yarn build

#Run
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
USER appUser
CMD ["appUser", "nginx", "-g", "daemon off;"]

