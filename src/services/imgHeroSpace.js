import homeLogo from "../assets/images/home.svg";
import faqLogo from "../assets/images/faq.svg";
export function getHeroSpace(url) {
  let res = homeLogo;
  if (url && url != null && url != "") {
    if (url.includes("faq")) {
      res = faqLogo;
    }
    if (url.includes("iniziativa")) {
      res = undefined;
    }
  } else {
    res = undefined;
  }
  return res;
}
