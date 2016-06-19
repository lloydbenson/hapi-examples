FROM lloydbenson/docker-centos-7-node
MAINTAINER Lloyd Benson <lloyd.benson@gmail.com>
RUN mkdir -p /apps/examples
ADD . /apps/examples
RUN cd /apps/examples && npm install --production
EXPOSE 8080
WORKDIR /apps/examples
CMD [ "npm", "start" ]
