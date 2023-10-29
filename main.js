function tocaSomAplausos () {
    document.querySelector('#som_tecla_aplausos').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



while() {
    listaDeTeclas[0].onclick = tocaSomAplausos;
}


