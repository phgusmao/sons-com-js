
const teclas = document.querySelectorAll('.tecla');

function tocaSom (audio) {
    const element = document.querySelector(audio);

    if(element === null || element.localName != 'audio') {
        alert('Elemento não encontrado!');
    }else {
        element.play();
    }
}

for(let i = 0; i < teclas.length; i++) {
    
    const tecla = teclas[i]
    const instrumento = tecla.classList[1];
    const audio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(audio);
    };

    tecla.onkeydown = function (e) {
        if (e.code === 'Enter' || e.code === 'Space') {
            tecla.classList.add('ativa');
            console.log(e.code)
        }
    }

    tecla.onkeyup = function (e) {
        if (e.code === 'Enter' || e.code === 'Space') {
            tecla.classList.remove('ativa');
        }
    }

}
