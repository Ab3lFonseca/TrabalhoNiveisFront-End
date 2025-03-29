let botao = document.getElementById("butaofoda");
botao.addEventListener("click", function(){
    let infoCad = [];
    let inputSenha = document.getElementById("inputSenha");
    let inputConfSenha = document.getElementById("inputConfirmSenha");
    let inputNome = document.getElementById("inputNome");
    let inputEmail = document.getElementById("inputEmail");
    if(inputNome.value == "" || inputEmail.value == "" || inputSenha.value == "" || inputConfSenha.value == ""){
            alert("Finalize de digitar as informações");
    }else{
        if(inputSenha.value == inputConfSenha.value){
            infoCad = [inputNome.value, inputEmail.value, inputSenha.value];
            console.log(infoCad);
            inputNome.value = "";
            inputEmail.value = "";
            inputConfSenha.value = "";
            inputSenha.value = "";
    
        }else{
            alert("As senhas não coincidem."); 
        }
    }
    
});