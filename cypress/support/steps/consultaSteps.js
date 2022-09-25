/// <reference types="cypress" />

/*global, Given, Then, When*/

import consultaPage from '../pageobjects/consultaPage'
const PageConsulta = new consultaPage

Given('que estou na tela de cadastro', () => {
    PageConsulta.acessarSite()
})

When('clico no botão de consulta', () => {
    PageConsulta.btnConsulta()
})

And('clico no botão voltar', () => {
    PageConsulta.btnVoltar()
})

Then('retorno para a tela inicial', () => {
    PageConsulta.rtnTelaInicial()
})