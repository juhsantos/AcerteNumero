const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumAleatorio()

function gerarNumAleatorio(){
    return parseInt(Math.random() * maiorValor + 1) 
}

console.log(`Numero secreto: ${numeroSecreto}`)


const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

