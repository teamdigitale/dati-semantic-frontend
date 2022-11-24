function getAlertMessage() {
  return window?._env_?.NDC_MAINTENANCE_MESSAGE;
}

export default getAlertMessage;
