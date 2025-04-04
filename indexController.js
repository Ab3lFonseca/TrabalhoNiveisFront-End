
let botao = document.getElementById("butaofoda");
  let infoCadN = [];
  let infoCadE = [];
  let infoCadS = [];
botao.addEventListener("click", function(){

  
    let inputSenha = document.getElementById("inputSenha");
    let inputConfSenha = document.getElementById("inputConfirmSenha");
    let inputNome = document.getElementById("inputNome");
    let inputEmail = document.getElementById("inputEmail");
    if(inputNome.value == "" || inputEmail.value == "" || inputSenha.value == "" || inputConfSenha.value == ""){
            alert("Finalize de digitar as informações");
    }else{
        if(inputSenha.value == inputConfSenha.value){
            infoCadN = inputNome.value;
            infoCadE = inputEmail.value;
            infoCadS = inputSenha.value;
            console.log(infoCadN, infoCadE, infoCadS);
            inputNome.value = "";
            inputEmail.value = "";
            inputConfSenha.value = "";
            inputSenha.value = "";
    
        }else{
            alert("As senhas não coincidem."); 
        }
    }
 
});
let botao2 = document.getElementById("botaocads");
botao2.addEventListener("click", function(){
    let p1 = document.getElementById("foda1");
    if(infoCadN.length === 0 && infoCadE === 0 && infoCadS === 0){
        alert("cadastre uma pessoa");
    }else
   
        window.location.href = "cadastros.html";

    });
