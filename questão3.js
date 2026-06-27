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