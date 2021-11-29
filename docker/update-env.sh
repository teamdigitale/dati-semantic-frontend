#!/bin/sh

set -ex

sed -i "s/env-at-runtime/${CURRENT_ENV:?}/g" /usr/share/nginx/html/index.html
echo "Success :: Performed env specific initialization, starting Ngnx"
