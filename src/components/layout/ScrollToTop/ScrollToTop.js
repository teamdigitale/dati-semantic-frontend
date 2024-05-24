import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  const scrollToTopOfElement = () => {
    const anchorElement = document.getElementById("searchAnchor");
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "instant" });
    }
  };

  useEffect(() => {
    if (
      search.includes("theme") ||
      search.includes("pattern") ||
      search.includes("type")
    )
      scrollToTopOfElement();
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
