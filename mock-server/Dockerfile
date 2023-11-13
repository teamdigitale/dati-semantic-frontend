# pull official base image
FROM node:16-alpine3.11

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
