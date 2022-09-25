Feature: Cadastro no sistema

    Realizar diferentes tipos de cadastros no sistema Tinnova.

    Scenario: Cadastro valido
     Given que estou na tela de cadastro
     When clico no botão adicionar
     And insiro os dados validos
     And clico no botão guardar
     Then o cadastro é realizado com sucesso

    Scenario: Cadastro invalido
     Given que estou na tela de cadastro
     When clico no botão adicionar
     And insiro os dados de CPF e telefone invalidos
     And clico no botão guarda
     Then mensagem solicitando todos os dados

    Scenario: Cadastro incompleto
     Given que estou na tela de cadastro
     When clico no botão adicionar
     And não insiro todos os dados
     And clico no botão guarda
     Then mensagem solicitando todos os dados