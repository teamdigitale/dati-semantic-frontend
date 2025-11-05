"use strict";

const fs = require("fs");
const errorOverlayMiddleware = require("react-dev-utils/errorOverlayMiddleware");
const evalSourceMapMiddleware = require("react-dev-utils/evalSourceMapMiddleware");
const noopServiceWorkerMiddleware = require("react-dev-utils/noopServiceWorkerMiddleware");
const ignoredFiles = require("react-dev-utils/ignoredFiles");
const redirectServedPath = require("react-dev-utils/redirectServedPathMiddleware");
const paths = require("./paths");
const getHttpsConfig = require("./getHttpsConfig");

const host = process.env.HOST || "0.0.0.0";
const sockHost = process.env.WDS_SOCKET_HOST;
const sockPath = process.env.WDS_SOCKET_PATH; // default: '/sockjs-node'
const sockPort = process.env.WDS_SOCKET_PORT;

module.exports = function (proxy, allowedHost) {
  return {
    allowedHosts:
      !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === "true"
        ? "all"
        : "auto",
    compress: true,
    hot: true,
    webSocketServer: "ws",
    https: getHttpsConfig(),
    host,
    port: 3000,
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicUrlOrPath
    },
    static: {
      directory: paths.appPublic,
      publicPath: paths.publicUrlOrPath,
      watch: {
        ignored: ignoredFiles(paths.appSrc)
      }
    },
    client: {
      overlay: false,
      webSocketURL: {
        hostname: sockHost,
        pathname: sockPath,
        port: sockPort
      },
      logging: "none"
    },
    proxy,
    onBeforeSetupMiddleware(server) {
      server.app.use(evalSourceMapMiddleware(server));
      server.app.use(errorOverlayMiddleware());
      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(server.app);
      }
    },
    onAfterSetupMiddleware(server) {
      server.app.use(redirectServedPath(paths.publicUrlOrPath));
      server.app.use(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
    }
  };
};
