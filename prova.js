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

//Questão 2;

function minhaIndexOf(arr, valor, inicio = 0) {

    if (!Array.isArray(arr)) {
        return -1;
    }

    if (!Number.isInteger(inicio)) {
        return -1;
    }

    if (inicio < 0) {
        inicio = arr.length + inicio;
    }

    if (inicio < 0) {
        inicio = 0;
    }

    for (let i = inicio; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i;
        }
    }

    return -1;
}

//Testes;

let vetor = [10, 20, 30, 20, 40];

console.log(minhaIndexOf(vetor, 20));      
console.log(minhaIndexOf(vetor, 20, 2));   
console.log(minhaIndexOf(vetor, 50));      
console.log(minhaIndexOf(vetor, 40, -2));  
console.log(minhaIndexOf(vetor, 10, 1));   
console.log(minhaIndexOf(vetor, 20, 1.5)); 
console.log(minhaIndexOf("teste", 20));    

//Questão 3;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerArray(mensagem) {
    return new Promise((resolve) => {

        function perguntar() {
            rl.question(mensagem, (entrada) => {

                try {
                    let vetor = JSON.parse(entrada);

                    if (!Array.isArray(vetor)) {
                        console.log("Erro: digite um array no formato [1,2,3]");
                        return perguntar();
                    }

                    for (let i = 0; i < vetor.length; i++) {
                        if (typeof vetor[i] !== "number") {
                            console.log("Erro: todos os valores devem ser numéricos.");
                            return perguntar();
                        }
                    }

                    resolve(vetor);

                } catch {
                    console.log("Formato inválido. Digite algo como [1,2,3]");
                    perguntar();
                }

            });
        }

        perguntar();

    });
}

function produtoEscalarVet(a, b) {

    if (a.length !== b.length) {
        return null;
    }

    let resultado = 0;

    for (let i = 0; i < a.length; i++) {
        resultado += a[i] * b[i];
    }

    return resultado;
}

async function main() {

    const vetor1 = await lerArray("Digite o primeiro vetor: ");
    const vetor2 = await lerArray("Digite o segundo vetor: ");

    let produto = produtoEscalarVet(vetor1, vetor2);

    if (produto === null) {
        console.log("Erro: os vetores devem possuir o mesmo tamanho.");
    } else {
        console.log("Produto escalar =", produto);
    }

    rl.close();

}

main();

//Questão 4;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerMatriz(mensagem) {
    return new Promise((resolve) => {

        function perguntar() {

            rl.question(mensagem, (entrada) => {

                try {

                    let matriz = JSON.parse(entrada);

                    if (!Array.isArray(matriz)) {
                        console.log("Digite uma matriz válida.");
                        return perguntar();
                    }

                    for (let i = 0; i < matriz.length; i++) {

                        if (!Array.isArray(matriz[i])) {
                            console.log("Digite uma matriz válida.");
                            return perguntar();
                        }

                        for (let j = 0; j < matriz[i].length; j++) {

                            if (typeof matriz[i][j] !== "number") {
                                console.log("Todos os valores devem ser numéricos.");
                                return perguntar();
                            }

                        }

                    }

                    resolve(matriz);

                } catch {

                    console.log("Formato inválido.");
                    perguntar();

                }

            });

        }

        perguntar();

    });
}

function produtoMatrizes(A, B) {

    if (A[0].length !== B.length) {
        return null;
    }

    let C = [];

    for (let i = 0; i < A.length; i++) {

        C[i] = [];

        for (let j = 0; j < B[0].length; j++) {

            let soma = 0;

            for (let k = 0; k < B.length; k++) {
                soma += A[i][k] * B[k][j];
            }

            C[i][j] = soma;

        }

    }

    return C;

}

async function main() {

    const A = await lerMatriz("Digite a primeira matriz: ");
    const B = await lerMatriz("Digite a segunda matriz: ");

    let resultado = produtoMatrizes(A, B);

    if (resultado === null) {
        console.log("Não é possível multiplicar essas matrizes.");
    } else {
        console.log("Resultado:");
        console.log(resultado);
    }

    rl.close();

}

main();

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