export class LoginPage {

    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'

    enterUsername(enterUsername) {
        cy.get(this.username_textbox).type(enterUsername)
    }

    enterPassword(enterPassword) {
        cy.get(this.password_textbox).type(enterPassword)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }
}
