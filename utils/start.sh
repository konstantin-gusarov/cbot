#!/bin/bash

docker stop cbot
docker rm cbot
docker run -p 80:7000 --name cbot kvgusarov/cbot:latest