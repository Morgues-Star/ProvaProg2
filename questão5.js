//Questão 5;

function destacarTermo(texto, termo) {

    if (typeof texto !== "string" || typeof termo !== "string") {
        return -1;
    }

    if (!texto.includes(termo)) {
        return null;
    }

    return texto.replaceAll(termo, "<mark>" + termo + "</mark>");
}

//Testes;

console.log(
    "Teste 1:",
    destacarTermo(
        "A prototipagem é essencial. A prototipagem facilita o desenvolvimento.",
        "prototipagem"
    )
);

console.log(
    "Teste 2:",
    destacarTermo(
        "Programação em JavaScript.",
        "Python"
    )
);

console.log(
    "Teste 3:",
    destacarTermo(
        10,
        "teste"
    )
);

console.log(
    "Teste 4:",
    destacarTermo(
        "JavaScript é legal.",
        5
    )
);
