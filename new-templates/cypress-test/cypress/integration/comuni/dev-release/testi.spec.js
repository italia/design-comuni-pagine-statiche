/// <reference types="cypress" />

import { pathPageClean } from "../../../support/@shared/html.cleaner";
import { titoloH1 } from "../../../support/@shared/html.selector";
import { ROUTES, titoloH2 } from "./_constants";



describe('Test dgenerici documento IT', () => {
  ROUTES.forEach((route) => {

    context('Pagina ' + pathPageClean(route), () => {
      beforeEach(() => {
        cy.customVisitInjectAxe(route);
        cy.title().as('titoloDocumento');
      })

      it('<title> con nome pagina e nome sito', () => {

        titoloH1().then(titleH1 => {
          const TitoloPGH1 = titleH1.text();
          cy.get('@titoloDocumento').should('include', TitoloPGH1, { matchCase: false })
        })

        titoloH2().then(titleH2 => {
          const TitoloPGH2 = titleH2.text();
          cy.get('@titoloDocumento').should('contain', TitoloPGH2, { matchCase: false })
        })

      })



    })

  });
});
