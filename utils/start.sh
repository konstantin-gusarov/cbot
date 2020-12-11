#!/bin/bash

docker stop cbot
docker rm cbot
docker run -p 80:7070 --name cbot kvgusarov/cbot:latest
