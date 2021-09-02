var opcao = document.getElementById ('opcao')
var hidden = document.getElementById ('invisivel')
var botao = document.getElementById ('btn')
var cod = document.getElementById ('codificar')
var dec = document.getElementById ('decodificar')
var result = document.getElementById ('resultado')
var msg = document.getElementById ('mensagem')
var cesar = document.getElementById ('cesar')
var base64 = document.getElementById ('base64')

cod.addEventListener('click', function (){
    botao.textContent = "Codificar mensagem"
})

dec.addEventListener ('click', function (){
    botao.textContent = "Decodificar mensagem"
})

botao.addEventListener('click', function(){
    if (opcao.value == 'base64' &&  botao.textContent == "Codificar mensagem") {
        result.value = btoa(msg.value)
    }
    else if (opcao.value == 'base64' && botao.textContent == "Decodificar mensagem") {
        result.value = atob(msg.value)
    }
    else if (opcao.value == 'cesar' && botao.textContent == "Codificar mensagem") { 
        result.value = cifraCod(msg.value, hidden.value)
    } 
    else if (opcao.value == 'cesar' && botao.textContent == "Decodificar mensagem") {
    result.value = cifraDec(msg.value, hidden.value)
    }
})

function cifraCod (arr, inc) {
    arr.split('')
    var inc0 = Number(inc)
    var final = []
    var retorno = []

    for (var i=0; i <arr.length; i++) {

        if (arr.charCodeAt(i) === 32) {
            final.push((arr.charCodeAt(i)))
                    
        } 
        else if (arr.charCodeAt(i)>= 65 && arr.charCodeAt(i)<= 90) {
            final.push((((arr.charCodeAt(i) - 65) + inc0) % 26) + 65);
                
        } 
        else if (arr.charCodeAt(i)>= 97 && arr.charCodeAt(i)<= 122){
            final.push((((arr.charCodeAt(i) - 97) + inc0) % 26) + 97);

        } 
        else {
            final.push((arr.charCodeAt(i)))

    }
}

        for (var j=0; j < final.length; j++) {
                            
            retorno.push(String.fromCharCode(final[j]))
        }

            return retorno.join('')
        }

function cifraDec (arr2, inc2) {
    arr2.split('')
    var inc4 = Number(inc2)
    var final2 = []
    var retorno = []

    for (var k=0; k < arr2.length; k++) {
        
        if (arr2.charCodeAt(k) === 32) {
            final2.push((arr2.charCodeAt(k)))
                
        } 
        else if (arr2.charCodeAt(k)>= 65 && arr2.charCodeAt(k)<= 90) {
            final2.push((((arr2.charCodeAt(k) - 65) - inc4) % 26) + 65);
            
        } 
        else if (arr2.charCodeAt(k)>= 97 && arr2.charCodeAt(k)<= 122){
            final2.push((((arr2.charCodeAt(k) - 97) - inc4) % 26) + 97);

        } 
        else {
            final2.push((arr2.charCodeAt(k)))
    }

}
    for (var l=0; l < final2.length; l++) {
    
        retorno.push(String.fromCharCode(final2[l]))
    }

return retorno.join('')
}

opcao.addEventListener ('click', function() {
    
    if (opcao.value === 'cesar') {
        hidden.style.display = "block"
    } 
    else {
        hidden.style.display = "none"
    }
})