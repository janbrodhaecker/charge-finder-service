# charge-finder-service
Simple REST service written in node.js, used in the lecture "Development of mobile applications" at the state corporate university of Mannheim. It provides a simple REST API to simulate the usage of an EV charge station finder.  

For that purpose Node.js and MongoDB is being used.  

## Requirements
Make sure you have Docker (also Docker-Compose) and Node.js installed. 

## Setup 
Build the environment by executing `docker-compose build` in the root directory of this project. 

## API 
`/api/v1/stations` allows to perform a `GET`, `POST` and `DELETE`. 