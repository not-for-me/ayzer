#!/bin/bash

echo "Build ayzer app..."

BASE_DIR=`pwd`
OUTPUT_BIN_NAME="ayzer"

echo "Build Base Path: " $BASE_DIR

DIST_DIR=$BASE_DIR/dist
if [ -d "$DIST_DIR" ]; then
    printf '%s\n' "Removing current distribution pkg: ($DIST_DIR)"
#    rm -rf "$DIST_DIR"
fi

echo "Build Web app..."

cd $BASE_DIR/ayzer-web
#npm run build -- -prod

cd $BASE_DIR/ayzer-server
go build -o $DIST_DIR/$OUTPUT_BIN_NAME

