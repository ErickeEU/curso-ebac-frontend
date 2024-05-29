function Pessoa(nome) {
    this.nome = nome

    this.trabalhar = function() {
        console.log('trabalhou')
    }
}

function Funcionario(nome, cargo, horas, salario) {
    this.cargo = cargo
    this.horas = horas
    this.salario = salario
    Pessoa.call(this, nome)

    this.trabalhar = function() {
        console.log('trabalhou')
    }
}

function Cliente(nome) {
    
    this.temCadastro = false
    Pessoa.call(this, nome)

    this.fazerPedido = function() {
        console.log('Fez pedido no restaurante')
    }

    this.fazerCadastro = function() {
        if (this.temCadastro == true) {
            console.log('Cliente já tem cadastro')
        } else {
            this.temCadastro = true
            console.log('Cadastro realizado com sucesso')
        }
    }

    this.removerCadastro = function() {
        if (this.temCadastro == false) {
            console.log('Não há cadastro para remover')
        } else {
            this.temCadastro = false
            console.log('Cadastro removido com sucesso')
        }
    }
}

function Garçom(nome) {
    Funcionario.call(this, nome, 'Garçom', 8, 2000)

    this.trabalhar = function() {
        console.log(`${this.nome} entregou comida nas mesas`)
    }
}

function Balconista(nome) {
    Funcionario.call(this, nome, 'Balconista', 10, 2000)

    this.trabalhar = function() {
        console.log(`${this.nome} atendeu clientes`)
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, 'Gerente', 6, 10000)

    this.trabalhar = function() {
        console.log(`${this.nome} Gerenciou o restaurante`)
    }
}

const Elisangela = new Balconista('Elisangela')
const Juninho = new Garçom('Juninho')
const Carlão = new Gerente('Carlão')
const Jonas = new Funcionario('Josue', 'faxineiro', 2, 20000)
const Maria = new Cliente('Maria')

Elisangela.trabalhar()
Juninho.trabalhar()
Carlão.trabalhar()
Maria.fazerCadastro()
Maria.fazerCadastro()
Maria.removerCadastro()
Maria.removerCadastro()

