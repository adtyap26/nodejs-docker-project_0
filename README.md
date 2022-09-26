# nodejs-docker-project_0
This is my first learning project about NodeJS apps and Docker.


Requirements
------------
In order to build from Dockerfile, all you need is simply install docker on your machine.


Usage
------------
clone this repository and after that you will build:

    docker build -t your_dockerhub_username/<nameofyourapp> .
    
Run your container:

    docker run --name <nameofyourapp> -p 80:8080 -d your_dockerhub_username/<nameofyourapp>



