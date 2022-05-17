/// <reference types="cypress" />

import { pathPageClean } from "../../../support/@shared/html.cleaner";
import { ROUTES,baseUrl } from "./_constants";

/* Cypress.config().baseUrl  */

describe('Test Link documento IT', () => {
  ROUTES.forEach((route) => {

    const lang = route.startsWith(baseUrl+'it') ? 'it':'en';

    context('Pagina ' + pathPageClean(route), () => {
      beforeEach(() => {
        cy.customVisitInjectAxe(route);
        /* cy.get('a[href^="http"]:not([href*="' + baseUrl + '"])').as('MainLink') */
      })

      it('Link esterno con Target="_blank" e aria-label con segnalazione di apertura su nuova scheda di sito esterno', () => {
        cy.linkEsterni(baseUrl,lang);
       
      })

      it('Download documenti segnala peso e formato. Esempio (PDF, xxKb)', () => {
        cy.documentiDownload(baseUrl,lang);
      })

    })

  });
});
