/// <reference types="cypress" />
import { ROUTES,A11Y_OPTIONS } from "./_constants";
import { pathPageClean } from "../../../support/@shared/html.cleaner";





describe('Test accessibilità', () => {
    ROUTES.forEach((route) => {

    context('Pagina ' + pathPageClean(route), () => {
     beforeEach(() => {
       cy.customVisitInjectAxe(route);
     })

     it('A11y', () => {
          cy.checkA11y(A11Y_OPTIONS)
     });


   })

  });
});
