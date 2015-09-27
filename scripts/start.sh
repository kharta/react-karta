#!/bin/sh

[ -z "${PORT}" ] && PORT=3010

webpack-dev-server \
-d --hot --inline --display-reasons --display-error-details --history-api-fallback --progress --devtool cheap-module-eval-source-map --labeled-modules --profile \
--colors --port ${PORT} --host 0.0.0.0 --output-public-path http://127.0.0.1:${PORT}/
