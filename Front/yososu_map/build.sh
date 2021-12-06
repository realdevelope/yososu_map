#!/bin/bash
# shellcheck disable=SC2046
echo `yarn install`
echo `yarn build`

docker rm $(docker stop $(docker ps -a -q --filter ancestor=nginx-react:0.1)) || notExistsUploade=false
docker rmi nginx-react:0.1

echo `docker build -t api-proxy:0.1 ../../Back/proxy`
echo `docker run -d -p 3001:3001 api-proxy:0.1`
