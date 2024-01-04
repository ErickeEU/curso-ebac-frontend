$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('form').validate({ 
        rules: {
            nome: {
                required: true,
                rangelength: [3, 30]
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
                minlength: 14
            }, 
            endereço: {
                required: true
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nome: 'Por favor, preencha o nome completo.',
            email: 'Por favor, insira um e-mail.',
            telefone: 'Por favor, insira um número de telefone.',
            cpf: 'Por favor, insira um cpf.',
            endereço: 'Por favor, insira um endereço.',
            cep: 'Por favor, insira um cep.'
        },
        submitHandler: function(form) {
            $('#sucess-message').attr('class', 'sucess')
        },
        invalidHandler: function(event, validator) {
            let incorretFields = validator.numberOfInvalids()
            if (incorretFields) {
                alert(`${incorretFields} campos estão incorretos.`)
            } 
        }
    })
})
