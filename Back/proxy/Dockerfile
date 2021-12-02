FROM node:14

WORKDIR proxy/app
COPY package.json ./
RUN yarn install
COPY . ./
EXPOSE 3001

CMD ["node", "app.js"]

# Docker image 빌드 -> $ docker build -t nginx-react:0.1 .
# Docker 띄우기 -> $ docker run -d —name my-react-app -p 80:80 nginx-react:0.1