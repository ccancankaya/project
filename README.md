# project
 #Client klasörüne gir
docker build -f Dockerfile.dev -t project/client .
docker run -it -p 4002:3000 project/client

 #server klasörüne 
docker build -f Dockerfile.dev -t project/server .
docker run -it -p 4003:5000 project/client

#ana klasöre git
docker-compose up --build
