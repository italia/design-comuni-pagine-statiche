// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { noLog } from './a11y.setup';
import { regexSizeUnitFile } from '../@helper/regexe'

Cypress.Commands.add('customVisit', (route, tWait = 200) => {
    cy.visit(route, noLog);

    if(tWait > 0){
        cy.wait(tWait);
    }

    Cypress.on('uncaught:exception', (err, runnable) => { return false });
});

Cypress.Commands.add('customVisitInjectAxe', (route) => {
    cy.customVisit(route);
    cy.injectAxe();
    cy.configureAxe({
        reporter: "v2",
        iframes: true
    })
});

Cypress.Commands.add('linkEsterni', (baseUrl, lang = 'it') => {
    // make login call to endpoint, and push info to redux store
    cy.get('a[href^="http"]:not([href*="' + baseUrl + '"])', noLog).each($link => {

/*         const objtmp = {
            ariaLabel: $link[0].getAttribute("aria-label"),
            title: $link[0].getAttribute("title"),
            text: $link.text()
        } */



        cy.get($link, noLog)
            .should('have.attr', 'target', '_blank')
            .should('have.attr', 'aria-label')
            .and("match", /((esterno|external)(.*)(nuova scheda|new tab))|((nuova scheda|new tab)(.*)(esterno|external))/i)


    })
})



Cypress.Commands.add('documentiDownload', (baseUrl, lang = 'it') => {
    const listSelector = 'a[href$=".pdf"i], a[href$=".doc"i], a[href$=".xls"i]';
    if (Cypress.$(listSelector).length > 0) {
        cy.get(listSelector, noLog).each($link => {
            /*  cy.log(`Link ${$link[0]}`) */
           const filePath = $link.prop("href");
           const objtmp = {
               link: filePath,
               ariaLabel: $link[0].getAttribute("aria-label"),
               title: $link[0].getAttribute("title"),
               text: $link.text(),
               extension: filePath.substring(filePath.lastIndexOf('.') + 1)
           }
           linkContieneTestoAccessibilita(objtmp, objtmp?.extension)
       })
    }
})



const linkContieneTestoAccessibilita = (objtmp, label) => {
   /*  cy.log(`Link ${JSON.stringify(objtmp)}`) */
    const regexDocType = new RegExp(label, 'gmi')
    let haveDoctype = false;
    let haveSizeUnit = false;

    let message = `${objtmp?.text} - `;

    const textHaveDoc = objtmp?.text && regexDocType.test(objtmp?.text || '');
    const ariaLabelHaveDoc = objtmp?.ariaLabel && regexDocType.test(objtmp?.ariaLabel || '');
    const titleHaveDoc = objtmp?.title && regexDocType.test(objtmp?.title || '');
    if (textHaveDoc || ariaLabelHaveDoc || titleHaveDoc) {
        haveDoctype = true
    } else {
        message += ' Tipo documento non segnalato '
    }

    const textHaveSizeUnit = objtmp?.text && regexSizeUnitFile.test(objtmp?.text || '');
    const ariaLabelHaveSizeUnit = objtmp?.ariaLabel && regexSizeUnitFile.test(objtmp?.ariaLabel || '');
    const titleHaveSizeUnit = objtmp?.title && regexSizeUnitFile.test(objtmp?.title || '');
    if (textHaveSizeUnit || ariaLabelHaveSizeUnit || titleHaveSizeUnit) {
        haveSizeUnit = true
    } else {
        message += ' Peso documento non segnalato '
    }

    message += ` exemple: (${label}, xxKb)`
    if (haveDoctype && haveSizeUnit) {
        expect(true).to.be.true
    } else {
        assert.isNotOk(true, `${message} ${JSON.stringify(objtmp)}`)
    }
}