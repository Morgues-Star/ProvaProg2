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