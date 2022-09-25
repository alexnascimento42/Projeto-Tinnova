/// <reference types="cypress" />

import consultaElements from "../elements/consultaElements"
const ConsultaElements = new consultaElements

class PageConsulta{
    acessarSite(){
        cy.visit('/')
        cy.get(ConsultaElements.botaoCadastro()).click({force: true})
    }

    btnConsulta(){
        cy.get(ConsultaElements.botaoConsulta()).click()
    }

    btnVoltar(){
        cy.get(ConsultaElements.botaoRetorna()).click()
    }

    rtnTelaInicial(){
        cy.get(ConsultaElements.botaoTelaInicial()).click()
    }
}

export default PageConsulta;