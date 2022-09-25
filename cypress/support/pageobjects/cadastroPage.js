/// <reference types="cypress" />

import cadastroElements from '../elements/cadastroElements'
import cadastroInvalidoElements from '../elements/cadastroInvalidoElements'

const CadastroElements = new cadastroElements
const CadastroInvalidoElements = new cadastroInvalidoElements

class PageCadastro {
    acessarSite() {
        cy.visit('/')
        cy.get(CadastroElements.botaoCadastro()).click({ force: true })
    }

    btnAdicionar() {
        cy.get(CadastroElements.botaoAdicionar()).click({ force: true })
    }

    dadosValidos() {
        cy.get('input[name="name"]').type('Alex Nascimento')
        cy.get('input[name="email"]').type('alexnascimento@tinnova.com.br')
        cy.get('input[name="cpf"]').type('032.063.754-45')
        cy.get('input[name="phone"]').type('85982130021')
    }

    dadosInvalidos() {
        cy.get('input[name="name"]').type('Alex Nascimento')
        cy.get('input[name="email"]').type('alexnascimento@tinnova.com.br')
        cy.get('input[name="cpf"]').type('aaaaaaaa')
        cy.get('input[name="phone"]').type('bbbbbbbbb')
    }

    dadosInconplt() {
        cy.get('input[name="name"]').type(' ')
        cy.get('input[name="email"]').type(' ')
        cy.get('input[name="cpf"]').type(' ')
        cy.get('input[name="phone"]').type(' ')
    }

    btnGuardar() {
        cy.get(CadastroElements.botaoGuarda()).click({ force: true })
    }

    msgError() {
        cy.get('.swal-text').should('have.text', 'Todos os campos devem ser preenchidos')
        cy.get(CadastroInvalidoElements.mensageError()).click()
    }
}

export default PageCadastro;