const form = document.getElementById('formulario');
let emaior = false ;

function validaNúmero (numA, numB) {
    let nA = parseInt(numA) ;
    let nB = parseInt(numB) ;
    return nB > nA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault() ;
    
    let sucessContainer = document.querySelector('.sucess-message')
    let errorContainer = document.querySelector('.error-message')
    let numeroA = document.getElementById('numeroa');
    let numeroB = document.getElementById('numerob');
    let mensagemSucesso = `Parabéns, ${numeroB.value} é maior que ${numeroA.value}!` ;
    let mensagemErro = `Errado. ${numeroB.value} não é maior que ${numeroA.value}.` ;
    emaior = validaNúmero(numeroA.value, numeroB.value)
    if (emaior) {
        errorContainer.style.display = "none" ;
        sucessContainer.style.display = 'block' ;
        sucessContainer.innerHTML = mensagemSucesso ; 

        numeroA.value = '' ;
        numeroB.value = '' ;
    } else if (numeroA.value == ''  || numeroB.value == '') {
        errorContainer.style.display = "none" ;
        sucessContainer.style.display = 'none' ;
        let erroNull = 'Um número não pode ser maior ou menor que nada.';

        errorContainer.style.display = 'block' ;
        errorContainer.innerHTML = erroNull ;
    } else {
        console.log('deu erro')
        sucessContainer.style.display = 'none' ;
        errorContainer.style.display = 'block' ;
        errorContainer.innerHTML = mensagemErro ;
    }
})

form.addEventListener('keyup', function(e){

})