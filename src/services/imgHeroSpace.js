import home from "../assets/images/Schema_img_home.png";
import faq from "../assets/images/Schema_img_faq.png";
export function getHeroSpace(url) {
  let res = { url: home, alt: "logo home", w: "474px", h: "250px" };
  if (url && url != null && url != "") {
    if (url.includes("faq")) {
      res = {
        url: faq,
        alt: "logo domande frequenti",
        w: "300px",
        h: "204px",
      };
    }
    if (url.includes("iniziativa")) {
      res = { url: "", alt: "", w: "1px", h: "1px" };
    }
  } else {
    res = { url: "", alt: "", w: "1px", h: "1px" };
  }
  return res;
}
