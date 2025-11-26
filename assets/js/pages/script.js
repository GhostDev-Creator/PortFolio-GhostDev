const URL_DESTINO = "https://mail.google.com/mail/?view=cm&fs=1&to=joaoguilherme.sc@gmail.com&su=Interesse%20em%20Contratar&body=Ol%C3%A1%20!%20Ghost,%0A%0AEu%20vi%20seu%20trabalho%20e%20gostaria%20de%20conhecer%20melhor%20suas%20habilidades%20e%20disponibilidade%20para%20um%20poss%C3%ADvel%20contrato.%20Espero%20por%20sua%20resposta.%0A%0AAtenciosamente,%20[Seu%20Nome]";

const elementosClicaveis = document.querySelectorAll(".contrate-me");
elementosClicaveis.forEach(elemento => {
    elemento.addEventListener("click", function() {
        window.location.href = URL_DESTINO;
    });
});

