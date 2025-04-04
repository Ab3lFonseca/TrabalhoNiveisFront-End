import "./indexController";
 function aparecerValores(){
    let mainContent = document.getElementById("mainHTML");
    for (let i = 0; i < infoCadN.length; i++) {
        let infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        let nomeP = document.createElement("p");
        nomeP.textContent = `Nome: ${infoCadN[i]}`;
        infoDiv.appendChild(nomeP);

        let emailP = document.createElement("p");
        emailP.textContent = `Email: ${infoCadE[i]}`;
        infoDiv.appendChild(emailP);

        let senhaP = document.createElement("p");
        senhaP.textContent = `Senha: ${infoCadS[i]}`;
        infoDiv.appendChild(senhaP);

        mainContent.appendChild(infoDiv);
    }
 };
 aparecerValores();