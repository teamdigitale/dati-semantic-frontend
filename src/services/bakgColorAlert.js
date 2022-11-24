export function ChangeAlertBackgroundColor(url) {
  console.log("sss", url);
  let res =
    url.includes("search") || url.includes("privacy-policy")
      ? "mantainenceAllertWhite"
      : "mantainenceAllert";

  return res;
}

export default ChangeAlertBackgroundColor;
