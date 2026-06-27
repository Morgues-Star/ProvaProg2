//Questão 1;
//Aluno: Morgana Vitória de Moura Menezes
//Matrícula: 578092

function minhaSlice(arr, inicio, fim) {

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || isNaN(arr[i])) {
            return null;
        }
    }

    if (typeof inicio !== "number" || typeof fim !== "number") {
        return [];
    }

    if (!Number.isInteger(inicio) || !Number.isInteger(fim)) {
        return [];
    }

    if (inicio < 0) {
        inicio = arr.length + inicio;
    }

    if (fim < 0) {
        fim = arr.length + fim;
    }

    if (inicio < 0) inicio = 0;
    if (fim > arr.length) fim = arr.length;

    let resultado = [];

    for (let i = inicio; i < fim; i++) {
        resultado.push(arr[i]);
    }

    return resultado;
}

//Testes;

let vetor = [1, 2, 3, 4, 5];

console.log("slice(0,2):", minhaSlice(vetor, 0, 2));
console.log("slice(-2,5):", minhaSlice(vetor, -2, 5));
console.log("slice(1,4):", minhaSlice(vetor, 1, 4));
console.log("slice(0,-1):", minhaSlice(vetor, 0, -1));

console.log("Início real:", minhaSlice(vetor, 1.5, 4));
console.log("Fim string:", minhaSlice(vetor, 1, "4"));
console.log("Array inválido:", minhaSlice([1, 2, "3"], 0, 2));
