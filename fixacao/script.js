let texto = document.getElementById("paragrafo")
console.log(texto.innerHTML)

function imprimirTextoDigitado(){
    let textoDoInput = document.getElementById("texto")
    console.log(textoDoInput.value)
}

function mudarElementoP(){
    texto.innerHTML = document.getElementById("texto").value
}