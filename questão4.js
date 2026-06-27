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