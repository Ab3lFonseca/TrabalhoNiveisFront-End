document.addEventListener("DOMContentLoaded", function() {
    let listaCadastros = document.getElementById("listaCadastros");

    let infoCadN = JSON.parse(localStorage.getItem("infoCadN")) || [];
    let infoCadE = JSON.parse(localStorage.getItem("infoCadE")) || [];
    let infoCadS = JSON.parse(localStorage.getItem("infoCadS")) || [];

    for (let i = 0; i < infoCadN.length; i++) {
        let li = document.createElement("li");
        li.textContent = `Nome: ${infoCadN[i]}, Email: ${infoCadE[i]}, Senha: ${infoCadS[i]}`;
        listaCadastros.appendChild(li);
    }
});

document.getElementById("botaoRetorno").addEventListener("click", function() {
    window.location.href = "index.html";
     });
    