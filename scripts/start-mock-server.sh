#!/bin/sh

set -e
cd "$( dirname "${BASH_SOURCE[0]}" )/../mock-server"

yarn start-mock-server