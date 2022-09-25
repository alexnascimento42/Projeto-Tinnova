/// <reference types="cypress" />

/*global, Given, Then, When*/

import cadastroPage from '../pageobjects/cadastroPage'
const CadastroPage = new cadastroPage

Given('que estou na tela de cadastro', () => {
    CadastroPage.acessarSite()
})

When('clico no botão adicionar', () => {
    CadastroPage.btnAdicionar()
})

And('não insiro todos os dados', () => {
    CadastroPage.dadosInconplt()
})

And('clico no botão guarda', () => {
    CadastroPage.btnGuardar()
})

Then('mensagem solicitando todos os dados', () => {
    CadastroPage.msgError()
})