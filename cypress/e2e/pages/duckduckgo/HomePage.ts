 class HomePage {
     private static CSS_INPUT_SEARCH = '#searchbox_input'
     private static CSS_BUTTON_SEARCH = '#searchbox_homepage button[type="submit"]'

    static  open(): void {
        cy.visit("https://duckduckgo.com/")
        cy.get('body').should('be.visible')
    }

    static click(): void {
         cy.get(HomePage.CSS_BUTTON_SEARCH).should('be.visible')
         cy.get(HomePage.CSS_BUTTON_SEARCH).click()
    }

    static fillSearch(text: string): void {
        cy.get(HomePage.CSS_INPUT_SEARCH).should('be.visible')
        cy.get(HomePage.CSS_INPUT_SEARCH).type(text)
    }

    static search(): void {
        if (!cy.get(HomePage.CSS_BUTTON_SEARCH).should('be.visible')) {
            return
        }
        cy.get(HomePage.CSS_BUTTON_SEARCH).click()
    }
 }

 export default HomePage
