# pull official base image
FROM node:18-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . ./

RUN apk add --no-cache git openssh

RUN yarn install

# start app
CMD ["yarn", "start-mock-server"]
