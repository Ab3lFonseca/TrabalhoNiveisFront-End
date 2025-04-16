let botao = document.getElementById("butaofoda");
botao.addEventListener("click", function() {
    let inputNome = document.getElementById("inputNome");
    let inputEmail = document.getElementById("inputEmail");
    let inputSenha = document.getElementById("inputSenha");
    let inputConfSenha = document.getElementById("inputConfirmSenha");

    if (inputNome.value === "" || inputEmail.value === "" || inputSenha.value === "" || inputConfSenha.value === "") {
        alert("Finalize de digitar as informações");
    } else {
        if (inputSenha.value === inputConfSenha.value) {
            // Recuperar os dados existentes do localStorage
            let infoCadN = JSON.parse(localStorage.getItem("infoCadN")) || [];
            let infoCadE = JSON.parse(localStorage.getItem("infoCadE")) || [];
            let infoCadS = JSON.parse(localStorage.getItem("infoCadS")) || [];

            // Adicionar novos dados aos arrays existentes
            infoCadN.push(inputNome.value);
            infoCadE.push(inputEmail.value);
            infoCadS.push(inputSenha.value);

            // Salvar os arrays atualizados no localStorage
            localStorage.setItem("infoCadN", JSON.stringify(infoCadN));
            localStorage.setItem("infoCadE", JSON.stringify(infoCadE));
            localStorage.setItem("infoCadS", JSON.stringify(infoCadS));

            console.log(infoCadN, infoCadE, infoCadS);

            inputNome.value = "";
            inputEmail.value = "";
            inputConfSenha.value = "";
            inputSenha.value = "";
        } else {
            alert("As senhas não coincidem.");
        }
    }
});

let botao2 = document.getElementById("botaocads");
botao2.addEventListener("click", function() {
    window.location.href = "cadastros.html";
});
