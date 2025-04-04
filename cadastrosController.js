import { infoCadN, infoCadE, infoCadS } from './indexController.js';

function aparecerValores() {
    let mainContent = document.getElementById("mainHTML");
    if (!mainContent) {
        console.error("Elemento com ID 'mainHTML' não encontrado.");
        return;
    }

    // Verifica se os arrays estão definidos e possuem o mesmo tamanho
    if (!infoCadN || !infoCadE || !infoCadS || 
        infoCadN.length !== infoCadE.length || infoCadN.length !== infoCadS.length) {
        console.error("Os arrays dinâmicos não estão carregados corretamente ou possuem tamanhos diferentes.");
        return;
    }

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
}

// Aguarda os dados dinâmicos estarem disponíveis antes de chamar a função
document.addEventListener("DOMContentLoaded", () => {
    aparecerValores();
});