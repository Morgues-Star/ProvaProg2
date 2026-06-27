//Questão 6;

function minhaFlat(arr) {

    if (!Array.isArray(arr)) {
        return null;
    }

    let resultado = [];

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {

            let achatado = minhaFlat(arr[i]);

            for (let j = 0; j < achatado.length; j++) {
                resultado.push(achatado[j]);
            }

        } else {

            resultado.push(arr[i]);

        }

    }

    return resultado;
}

//Testes;

console.log(
    "Teste 1:",
    minhaFlat([1, [2, [3, 4], 5], 6])
);

console.log(
    "Teste 2:",
    minhaFlat([[1, 2], [3, 4], [5]])
);

console.log(
    "Teste 3:",
    minhaFlat([1, [2], [[3]], [[[4]]]])
);

console.log(
    "Teste 4:",
    minhaFlat("teste")
);