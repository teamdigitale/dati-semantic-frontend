#!/bin/sh

set -e
cd "$( dirname "${BASH_SOURCE[0]}" )/.."

docker pull github/super-linter:latest
docker run \
  -e RUN_LOCAL=true \
  -e VALIDATE_BASH=false \
  -e VALIDATE_MARKDOWN=false \
  -e JAVASCRIPT_ES_CONFIG_FILE='../../.eslintrc.json' \
  -e JAVASCRIPT_DEFAULT_STYLE='prettier' \
  -e CSS_FILE_NAME='../../.stylelintrc.json' \
  -e FILTER_REGEX_INCLUDE='.*(src|\.github)/.*' \
  -e FILTER_REGEX_EXCLUDE='.*.(min.css|ttf|woff|woff2|svg|txt|md)' \
  --rm \
  -v $(pwd):/tmp/lint github/super-linter