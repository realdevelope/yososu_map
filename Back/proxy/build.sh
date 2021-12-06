docker rm $(docker stop $(docker ps -a -q --filter ancestor=api-proxy:0.1)) || notExistsUploade=false
docker rmi api-proxy:0.1

echo `docker build -t api-proxy:0.1 .`
echo `docker run -d -p 80:80 api-proxy:0.1`