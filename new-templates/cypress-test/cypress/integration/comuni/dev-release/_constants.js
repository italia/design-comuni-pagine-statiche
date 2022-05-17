export const baseUrl = "http://127.0.0.1:8080/dist/"


const ROUTES_IT = [
  baseUrl + "trovare-informazioni-servizio.html",
  baseUrl + "accedere-servizio.html",
  baseUrl + "acconsentire-trattamento-dati-inseriti.html",
  baseUrl + "controllare-dati-personali.html",
  baseUrl + "inserire-dati-specifici.html",
  baseUrl + "conferma-riepilogo-informazioni-inserite.html",
  baseUrl + "finalizzare-procedura.html",
  baseUrl + "perfezionare-richiesta.html",
];
const ROUTES_EN = [
  /*  
  baseUrl + "it/home.html",

  baseUrl + "it/priorita-del-piano/giovani.html",
  baseUrl + "it/priorita-del-piano/parita-di-genere.html",
  baseUrl + "it/priorita-del-piano/riduzione-del-divario-di-cittadinanza.html",

  baseUrl + "it/missioni-pnrr/digitalizzazione-e-innovazione.html",
  baseUrl + "it/missioni-pnrr/rivoluzione-verde-transizione-ecologica.html",
  baseUrl + "it/missioni-pnrr/mobilita-sostenibile.html",
  baseUrl + "it/missioni-pnrr/istruzione-e-ricerca.html",
  baseUrl + "it/missioni-pnrr/inclusione-coesione.html",
  baseUrl + "it/missioni-pnrr/salute.html",

  baseUrl + "it/le-risorse-per-la-crescita.html",
  baseUrl + "it/investimenti.html",
  baseUrl + "it/investimenti/ricerca-avanzata.html?orderby=%40jcr%3Acontent%2Fjcr%3Atitle&sort=asc",
  baseUrl + "it/investimenti/abilitazione-e-facilitazione-migrazione-al-cloud.html",

  baseUrl + "it/riforme.html",
  baseUrl + "it/piano-complementare.html",
  baseUrl + "it/news.html",
  baseUrl + "it/documenti-pnrr.html",
  baseUrl + "it/domande-frequenti.html"
  */
];

const ROUTES = [...ROUTES_IT, ...ROUTES_EN];

// Define at the top of the spec file or just import it
const TERMINAL_LOG = (violations) => {
  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task("table", violationData);
};

const VIEWPORT2CECK = [
  [1920, 1080],
  [320, 256],
  "macbook-15",
  "macbook-13",
  "macbook-11",
  "iphone-6",
  "iphone-6+",
  "ipad-mini",
];

export {
  ROUTES,
  ROUTES_IT,
  ROUTES_EN,
  TERMINAL_LOG,
  VIEWPORT2CECK,
};

export const titoloH2 = () => cy.get('.section-header h2.font-weight-bold'); 