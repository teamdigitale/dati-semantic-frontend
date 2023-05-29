# Build
FROM node:16-alpine3.11 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
COPY talisman ./talisman
RUN yarn install
COPY . ./
RUN yarn lint --fix
RUN yarn build

#Run
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY --from=build /app/build /etc/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY env.sh .env /etc/nginx/html/
USER root
RUN chgrp -R root /etc/nginx/html && \
    chmod -R g=u /etc/nginx/html && \
    chown -R nginx /etc/nginx/html && \
    addgroup nginx root
USER nginx
CMD ["/bin/sh", "-c", "cd /etc/nginx/html/ && ./env.sh && rm -rf env.sh .env && nginx -g \"daemon off;\""]