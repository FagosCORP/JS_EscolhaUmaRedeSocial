let SeuVoto = document.querySelector('.Cvoto span');
let redesSOci = document.querySelector('.redes');
let descricao = document.querySelector('.mais');
let avisos = document.querySelector('.infos');
let image = document.querySelector('.redes img');
let wiki = document.querySelector('.wiki');
let teclado = document.querySelector('.teclado')
let etapAtual = 0;
let numero = '';
let VotoBranco = false;
let votos = [];

function comecar() {
    let etapa = etapas[etapAtual];
    SeuVoto.style.display = 'none';
    avisos.style.display = 'none';
    wiki.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    VotoBranco = false;
}
comecar();

function attTela() {
    let etapa = etapas[etapAtual];
    let ceo = etapa.redes.filter((item) => {
        if (item.numero === numero) { return true; }
        else { return false; }
    }
    );
    if (ceo.length > 0) {
        ceo = ceo[0];
        avisos.style.display = 'block'
        SeuVoto.style.display = 'block';
        wiki.innerHTML = `Nome: ${ceo.nome} `;
        descricao.innerHTML = ` CEO : ${ceo.criador}`;
    }



}
function clicou(n) {
    let foto = document.querySelector('.redes');
    switch (n) {
        case '1': foto.innerHTML = ' <div class="imgRedes pisca"><img src="/imgs/facebook (1).png"></div>';
            break;
        case '2': foto.innerHTML = '<div class="imgRedes pisca"><img src="/imgs/instagram (1).png"></div>';
            break;
        case '3': foto.innerHTML = '<div class="imgRedes pisca"><img src="/imgs/steam.png"></div>';
            break;
        case '4': foto.innerHTML = '<div class="imgRedes pisca"><img src="/imgs/pinterest.png"></div>';
            break;
        case '5': foto.innerHTML = '<div class="imgRedes pisca"><img src="/imgs/twitter (1).png"></div>';
            break;
        case '6': foto.innerHTML = '<div class="imgRedes pisca"><img src="/imgs/whatsapp (1).png"></div>';
            break;
        case '7': foto.innerHTML = '<div class="imgRedes pisca"><img src="/imgs/reddit.png"></div>';
            break;
        case '8': foto.innerHTML = '<div class="imgRedes pisca"><img src="/imgs/linkedin.png"></div>';
            break;
        case '9': foto.innerHTML = '<div class="imgRedes pisca"><img src="/imgs/telegram.png"></div>';
            break;
        case '0': foto.innerHTML = '<div class="imgRedes pisca"><img src="/imgs/discordia.png"></div>';
            break;
    }
    numero = `${n}`
    attTela();
}

function branco() {
    if (numero === '') {
        VotoBranco = true;
        numero = ''
        avisos.style.display = 'block'
        SeuVoto.style.display = 'block';
        redesSOci.innerHTML = ''
        descricao.innerHTML = '<div class="VOTOBRANCO">Voto Branco</div>'
    }
    else { alert('PARA REALIZAR O VOTO EM BRANCO REINICIE A PAGINA') }


}



function corrige() {
    comecar();

}


function confirma() {
    let VotoConfirmado = false;
    let etapa = etapas[etapAtual];

    if (VotoBranco === true) {
        VotoConfirmado = true;
        votos.push({
            etapa: etapas[etapAtual].titulo,
            voto: 'branco'
        })
    }

    else if (numero.length === etapa.numeros) {
        VotoConfirmado = true;
        votos.push({
            etapa: etapas[etapAtual].titulo,
            voto: numero
        })
    }


    if (VotoConfirmado) {
        let tela = document.querySelector('.tela');
        tela.innerHTML = '<div class="fim pisca">FIM</div>'
        teclado.style.display = 'none'
        console.log(votos)
    }
}