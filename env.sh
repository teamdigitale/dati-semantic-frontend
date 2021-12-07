#!/bin/sh
# line endings must be \n, not \r\n !
config_file=./env-config.js
echo "window._env_ = {" >$config_file
awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' ./.env >>$config_file
echo "}" >>$config_file
