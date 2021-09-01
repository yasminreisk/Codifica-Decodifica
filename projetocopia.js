var escolher = document.getElementById ('opcao')
var hidden = document.getElementById ('invisivel')
var anularBase64 = document.getElementById ('base')

escolher.addEventListener('change', function (){
    (escolher.value == 'base')? base() : cipher(); 
})

var cipher = ()=>{
    hidden.style.display = "flex"
}

var base = ()=>{
    hidden.style.display = "none"
}

document.getElementById ('msg').addEventListener('keyup', (cifra)=>{
    
    if (escolher.value == 'cipher') {
        var msg = document.getElementById ('msg').value.split('')
        var result = document.getElementById ('resultado')
        var incremento = parseInt(document.getElementById (incCesar).value)
        var codify = document.getElementById ('codificado').checked
    }
    if (codify){
        result.value = cesarCod (msg, incremento)
    }
    else{
        result.value = cesarDec (msg, incremento)
    }
    if (escolher.value == 'base') {
        var msg = document.getElementById ('mensagem').value
        var result = document.getElementById ('resultado')
        var codify = document.getElementById ('codificado').checked 

        result.value = base64Cod (msg, codify)
    }
})

    function cesarCod (arr, incCesar) {
        return arr.map((cifra)=>{
            var codigo = cifra.charCodeAt(0);
            if(codigo >= 65 && codigo <= 90){
                return String.fromCharCode(((codigo - 65 + incCesar) % 26) + 65)
            } 
            else if(codigo >= 97 && codigo <= 122){
                return String.fromCharCode(((codigo - 97 + incCesar) % 26) + 97)
            }
            else return cifra

        }).join ('')
    }

    function cesarDec (arr, incCesar ){
        return arr.map ((cifra)=>{
            var codigo = cifra.charCodeAt(0);
            if(codigo >= 65 && codigo <= 90){
                return (codigo-65-incCesar < 0)?String.fromCharCode (((codigo - 65 - incCesar + 26)%26)+65):String.fromCharCode(((codigo - 65 - incCesar)%26)+65) 
            }
            else if (codigo >= 97 && codigo <= 122){
                return String.fromCharCode(((codigo - 97 - incCesar+ 26) % 26) + 97)
            } 
            else return cifra
        }).join('')
    }

    function base64Cod (msg, codify){
        return (decisao)? btoa(msg) : atob(msg)
    }