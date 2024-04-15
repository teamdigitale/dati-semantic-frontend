const recalculateIsMobile = () => () =>
  window.matchMedia("(max-width: 991px)").matches;

window.addEventListener("resize", () => {
  recalculateIsMobile();
});

export const isMobile = recalculateIsMobile();
