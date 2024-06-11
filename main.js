class Aluno {
    constructor (nome, nota) {
        this.nome = nome
        this.nota = nota
    }
}

const arrayDeObjetos = [
    aluno1 = new Aluno('João', 6),
    aluno2 = new Aluno('Vitor', 0),
    aluno3 = new Aluno('Maria Joaquina', 9),
    aluno4 = new Aluno('Ricardo', 0),
    aluno5 = new Aluno('Jonathan', 8)
]

function retornaAprovados (){
    const aprovados = arrayDeObjetos.filter(function(objeto, index) {
        if (objeto.nota >= 6) {
            return objeto
        }
    })
    return aprovados
}

console.log(retornaAprovados())