function tocaSomGrilo () {
    document.querySelector("#som_tecla_grilo").play();
    
}

function tocaSomAplasusos () {
    document.querySelector("#som_tecla_aplausos").play();
    
}

document.querySelector(".tecla_grilo").onclick = tocaSomGrilo;
document.querySelector(".tecla_aplausos").onclick = tocaSomAplasusos;



