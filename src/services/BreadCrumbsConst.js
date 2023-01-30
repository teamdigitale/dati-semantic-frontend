import { routes } from "../services/routes";
export const EXPLOREPAGE = [{ label: "Home", link: "", id: 1 }];
export const PROJECTPAGE = [
  { label: "Home", link: routes.explore(), id: 2 },
  { label: "Scopri l’iniziativa", link: "", id: 3 },
];
export const FAQPAGE = [
  { label: "Home", link: routes.explore(), id: 4 },
  { label: "Domande frequenti", link: "", id: 5 },
];
export const SEARCHPAGE = [
  { label: "Home", link: routes.explore(), id: 6 },
  { label: "Catalogo", link: "", id: 7 },
];
export const DETAILSPAGE = [
  { label: "Home", link: routes.explore(), id: 8 },
  { label: "Catalogo", link: "back", id: 9 },
  { label: "Dettaglio asset: ", link: "", id: 10 },
];
export const PRIVACYPAGE = [
  { label: "Home", link: routes.explore(), id: 11 },
  { label: "Informativa privacy", link: "", id: 12 },
];
export const LEGALNOTICES = [
  { label: "Home", link: routes.explore(), id: 13 },
  { label: "Note legali", link: "", id: 14 },
];
export const BREADCRUMBS = {
  EXPLOREPAGE: EXPLOREPAGE,
  PROJECTPAGE: PROJECTPAGE,
  FAQPAGE: FAQPAGE,
  SEARCHPAGE: SEARCHPAGE,
  DETAILSPAGE: DETAILSPAGE,
  PRIVACYPAGE: PRIVACYPAGE,
  LEGALNOTICES: LEGALNOTICES,
};

export default BREADCRUMBS;
