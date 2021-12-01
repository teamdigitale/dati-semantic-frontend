const urlConfig = {
  dev: "/api",
  default: "",
  dockerCompose: "http://localhost:7002",
};

export function baseUrl() {
  return urlConfig[window.env] || urlConfig.default;
}
