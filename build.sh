#!/bin/bash

echo "Build Web app";

cd ayzer-web
npm run build -- -prod

cd ../ayzer-server
go build

mv ./ayzer-server ../dist

