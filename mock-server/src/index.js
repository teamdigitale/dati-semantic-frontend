const mb = require("mountebank");
const settings = require("./settings");
const mainService = require("./service/main");

const mbServerInstance = mb.create({
  port: settings.port,
  pidfile: "../mb.pid",
  logfile: "../mb.log",
  protofile: "../protofile.json",
  ipWhitelist: ["*"],
});

mbServerInstance.then(() => {
  mainService.addService();
});
