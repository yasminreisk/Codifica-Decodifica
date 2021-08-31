// declaração de variaveis 

var msn = document.getElementById ('mensagem')
var slct = document.getElementById ('select')
var hidden = document.getElementById ('invisivel')
var cod = document.getElementById ('codificado')
var decod = document.getElementById ('decodificado')
var btnCod = document.getElementById ('botaoCod')
var btnDec = document.getElementById ('botaoDec')
var btn = document.getElementById ('botao')
var result = document.getElementById ('resultado')
var cesar = document.getElementById ('incCesar').value

//Eventos

slct.addEventListener('change', function (){
    if (slct.value === 'cipher'){
        hidden.classList.remove (cifra)
    }
    else if (slct.value === 'base') {
        hidden.classList.add (cifra)
    }
})
    
cod.addEventListener ('click', function (){
    btnCod.classList.remove (codBotao)
    btnDec.classList.add (decodBotao)
})

decod.addEventListener ('click', function (){
    btnDec.classList.remove (decodBotao)
    btnCod.classList.add (codBotao)
})

btnCod.addEventListener ('click', function(){
    if (slct.value === 'cipher'){
        codCesar()
    }
    if (slct.value === 'base'){
        var codificandoMsn = btoa(msn.value)
        result.value = `${codificandoMsn}`
    }
})

function codCesar (){
    
}

function decodCesar(){

}