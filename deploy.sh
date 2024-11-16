#!/bin/bash

git pull
docker compose build
systemctl restart cv.service
