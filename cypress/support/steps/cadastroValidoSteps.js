/// <reference types="cypress" />


/*global, Given, Then, When*/

import cadastroPage from '../pageobjects/cadastroPage'
const CadastroPage = new cadastroPage 

// O Given consta na Step global, pois esta sendo usado em todas as steps.

Given('que estou na tela de cadastro', () => {
    CadastroPage.acessarSite()
})

When('clico no botão adicionar', () => {
    CadastroPage.btnAdicionar()
})

And('insiro os dados validos', () => {
    CadastroPage.dadosValidos()
})

And('clico no botão guardar', () => {
    CadastroPage.btnGuardar()
})

Then('o cadastro é realizado com sucesso', () => {
    
})