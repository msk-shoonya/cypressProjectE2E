import { LoginPage } from "./pages/login_page";
import urls from "../fixtures/urls.json";
import loginCredentials from "../fixtures/loginCredentials.json";

const loginPage = new LoginPage()

beforeEach(() => {
    cy.visit(urls[Cypress.env('ENV')])
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

describe('All login tests--', () => {
    it('Login with valid credentials', () => {
        loginPage.enterUsername(loginCredentials[Cypress.env('ENV')].username)
        loginPage.enterPassword(loginCredentials[Cypress.env('ENV')].password)
        loginPage.clickLogin()
        cy.contains('Dashboard')
    })

    it('Login with valid credentials', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Dashboard')
    })

    it('Login with invalid username', () => {
        loginPage.enterUsername('Admin678')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-alert-content > .oxd-text').contains
        // cy.contains('Dashboard')
    })
})

it('Login with invalid password', () => {
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('adminxxxx')
    loginPage.clickLogin()
    cy.get('.oxd-alert-content > .oxd-text').contains
    // cy.contains('Dashboard')
})
