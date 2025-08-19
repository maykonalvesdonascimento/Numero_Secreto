// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML= 'Escolha um número de 1 a 10';
let numeroLimite = 10;
let listaNumeros = [];
let tentativa = 0 ;
exibirMensagemInicial();

let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
 if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }

}
function exibirMensagemInicial(){

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

function verificarChute(){
    tentativa++;
    let chute = document.querySelector('input').value;


if ( chute== numeroSecreto){
    msgTentativa = tentativa==1? `Você acertou o número secreto com ${tentativa} tentativa` : `Você acertou o número secreto com ${tentativa} tentativas`;
    exibirTextoNaTela('h1','Você Ganhou');
    exibirTextoNaTela('p', msgTentativa);
    habilitarBotao('reiniciar');

}else {

    if ( numeroSecreto>chute){   
        exibirTextoNaTela('p', `Você errou, o Número Secreto é maior que ${chute}`);

    }else{
        exibirTextoNaTela('p', `Você errou, o Número Secreto é menor que ${chute}`);
    }

    LimparCampo();
    }

    
}


function LimparCampo(){

    let chute = document.querySelector('input');
    chute.value = '';
}
function gerarNumeroAleatorio(){

     
    let numeroAleatorio =  Math.floor(Math.random()*numeroLimite+1);
    if(listaNumeros.length==numeroLimite){
        listaNumeros=[];
    }

    if (listaNumeros.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();

    }else{
       
        listaNumeros.push(numeroAleatorio);
         console.log(listaNumeros);
        return numeroAleatorio;
    }
}

function habilitarBotao(id){
    let reiniciar = document.getElementById(id);
    reiniciar.removeAttribute('disabled');

}

function reiniciarJogo(){
  
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirMensagemInicial();
    LimparCampo();
    numeroSecreto= gerarNumeroAleatorio();
    tentativa=0;
    

}