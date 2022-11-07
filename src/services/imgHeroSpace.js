import home from "../assets/images/Schema_img_home.png";
import faq from "../assets/images/Schema_img_faq.png";
export function getHeroSpace(url) {
  let res = { url: home, alt: "logo home" };
  if (url && url != null && url != "") {
    if (url.includes("faq")) {
      res = {
        url: faq,
        alt: "logo domande frequenti",
      };
    }
    if (url.includes("iniziativa")) {
      res = { url: "", alt: "" };
    }
  } else {
    res = { url: "", alt: "" };
  }
  return res;
}
