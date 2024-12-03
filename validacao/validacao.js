function validaNome(nome){

    const regex = /^[A-Za-zÀ-ÿ\s]+$/;

    const nomeValido = regex.test(nome);

    return nomeValido;
}

function validaEmail(email){

    const regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const emailValido = regex.test(email);

    return emailValido;
}

function validaTelefone(telefone){

    const regex =/^\(\d{2}\) \d{4,5}-\d{4}$/;

    const telefoneValido = regex.test(telefone);

    return telefoneValido;
}

export function validaUsuario(nome,email,telefone){

    const usuarioValido = validaNome(nome) && validaEmail(email) &&  validaTelefone(telefone);

        if(usuarioValido){
            return{status :true, mensagem :'' }
        }
        else{
            return{status:false, mensagem : 'Nome , Email ou Telefone invalidos'}
        }
}