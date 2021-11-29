const urlConfig = {
  dev: "/api",
  default: "",
};

export function baseUrl() {
  return urlConfig[window.env] || urlConfig.default;
}
