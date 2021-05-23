# project
 #Client klasörüne gir
docker build -f Dockerfile.dev -t project/client .
docker run -it -p 4002:3000 project/client

 #server klasörüne 
