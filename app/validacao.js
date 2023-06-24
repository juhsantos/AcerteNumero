function verificaChuteValorValido() {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementochute.innerHTML += '<div>Valor invalido</div>'
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementochute.innerHTML += `<div>Valor inválido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Voce Acertou !</h2>
        <h3>O numero secreto é ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
         `
    } 
     if (numero < numeroSecreto) {
        elementochute.innerHTML += `
        <div><h3>O numero secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></h3></div>        
        `
        
    } else {
        elementochute.innerHTML += `
        <div><h3>O numero secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></h3></div>`
        
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()

    }
})
