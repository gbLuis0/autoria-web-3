function camposVazios(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let conSenha = document.getElementById('confirmPassword').value

    // if (nome !== "" && email !== "" && senha !== "" && conSenha !== ""){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    let bool = nome !== "" && email !== "" && senha !== "" && conSenha !== "";
    return bool ? true : false;

}

function compararSenhas(){
    return conSenha !== senha ? false : true
}

function cadastro(){
    if (camposVazios() && compararSenhas()){
        alert('Cadatro realizado com sucesso!');       
    }
    else{
        alert('Preencha os dados corretamente.')
    }
}