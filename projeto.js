// declaração de variaveis 

var msn = document.getElementById ('mensagem').value
var slct = document.getElementById ('select')
var hidden = document.getElementById ('invisivel')
var cod = document.getElementById ('codificado')
var decod = document.getElementById ('decodificado')
var btnCod = document.getElementById ('botaoCod')
var btnDec = document.getElementById ('botaoDec')
var btn = document.getElementById ('botao')
var result = document.getElementById ('resultado')
var cesar = document.getElementById ('incCesar').value
var mensagem2 = msn.split("")
var incrementar = parseInt(cesar)
var arr1 = []
var arr2 = []
var finalMsn = ""

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

// Cifra de Cesar

function codCesar (){
  for (var i=0; i<mensagem.length; i++) {
      arr1.push(mensagem[i].charCodeAt() + incrementar)
      console.log(arr1)
  }
  for (var j=0; j <arr1.length; j++){
    arr2.push(String.fromCharCode(arr1[j]))  
}

    finalMsn = arr2.join("")  
     result.value = `${finalMsn}`
     console.log(finalMsn) 
}

function decCesar () {
    for (var i=0; i<mensagem.length; i++) {
        arr1.push(mensagem[i].charCodeAt() - incrementar)
        console.log(arr1)
    }
    for (var j=0; j <arr1.length; j++){
        arr2.push(String.fromCharCode(arr1[j]))  
    }

    finalMsn = arr2.join("")  
     result.value = `${finalMsn}`
     console.log(finalMsn) 
}

// Base64

function decodCesar(){

}