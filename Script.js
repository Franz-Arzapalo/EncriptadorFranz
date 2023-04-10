const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}
console.log(textArea)

function encriptar(stringencriptado) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringencriptado = stringencriptado.toLowerCase()
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringencriptado.includes(matrizCodigo[i][0])){
            stringencriptado = stringencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        
        }
    }
    return stringencriptado
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringdesencriptado) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringdesencriptado = stringdesencriptado.toLowerCase()
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringdesencriptado.includes(matrizCodigo[i][1])){
            stringdesencriptado = stringdesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringdesencriptado
}

function btncopiar () {
    let textcopiado = document.querySelector(".mensaje");
    textcopiado.select();
    document.execCommand("copy");
}
