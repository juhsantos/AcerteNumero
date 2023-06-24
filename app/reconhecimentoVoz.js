const elementochute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || 
window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
     chute = e.results[0][0].transcript
    exibeChuteTela(chute)
    verificaChuteValorValido(chute)
}

function exibeChuteTela(chute){
    elementochute.innerHTML = `
    <div><h3>Voce disse</h3></div>
        <span class="box">${chute}</span>        
    `
}

recognition.addEventListener('end', () => recognition.start())

