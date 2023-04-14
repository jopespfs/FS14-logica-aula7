let palpites = [];
let tentativas = 0;
let biaNumero;
gerarRandon()
console.log(biaNumero)

palpite.onkeyup = function(event){
    if(event.key === "Enter"){
        if(tentativas <= 5){
            checarPalpite(palpite.value)
            //mostra as tentativas
            mostrarPalpites();
            //zera o input
            palpite.value = '';

            //checa se acabou as tentativas
            tentativas == 5 &&  encerraJogo()
        }
    }
}

function mostrarPalpites()
{
    let ps = document.querySelector('.palpites span');
    ps.innerHTML = palpites.toString().replaceAll(',','-')
}

function encerraJogo()
{
    palpite.style.display = 'none';
    let resultado = document.querySelector('.resultado');
    resultado.style.display = 'initial';
    resultado.innerHTML = 'Você não acertou, o número era <span>'+biaNumero+'</span>';
    let encerrar = document.querySelector('.encerrar');
    encerrar.style.display = 'initial';
    bia.src = 'img/derrota.png'
}

function checarPalpite(t)
{
    if(Number(t) >=0 && Number(t) <= 100 && t != ''){
        if(palpites.includes(t)){
            alert('Este número já foi dado');
            return;
        }
        //adicionar no array
        palpites.push(palpite.value);
        (Number(t) == biaNumero) && vitoria();
        //encrementa as tentativas
        tentativas++;

    }else{
        alert('Digite um número entre 0~100')
    }
}

function restart()
{
    palpites = [];
    bia.src = 'img/bia.png'
    tentativas = 0;
    let encerrar = document.querySelector('.encerrar');
    encerrar.style.display = 'none';
    let resultado = document.querySelector('.resultado');
    resultado.style.display = 'none';
    let ps = document.querySelector('.palpites span');
    ps.innerHTML = '';
    palpite.style.display = 'initial';
    gerarRandon();
}

function vitoria()
{
    palpite.style.display = 'none';
    let resultado = document.querySelector('.resultado');
    resultado.style.display = 'initial';
    resultado.innerHTML = 'Parabéns você acertou, o número é <span>'+biaNumero+'</span>';
    let encerrar = document.querySelector('.encerrar');
    encerrar.style.display = 'initial';
    bia.src = 'img/vitoria.png'
}

function gerarRandon()
{
    return biaNumero = Math.floor(Math.random() * 100) + 1;
}