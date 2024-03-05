document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-teste').addEventListener('submit', function(event){
        event.preventDefault()
        alert('Funcionando')    
    })
})