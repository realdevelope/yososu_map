#!/bin/bash
# shellcheck disable=SC2046
echo `yarn install`
echo `yarn build`

docker rm -f $(docker ps -qa) || notExistsUploade=false
docker rmi nginx-react:0.1

echo "build react image"
echo `docker build -t nginx-react:0.1 .`
echo `docker run -d -p 80:80 nginx-react:0.1`
