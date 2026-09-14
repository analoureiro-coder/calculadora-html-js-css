let resultadoExibido = false

function inserirNumero(numero) {
    const tela = document.getElementById('display');
    if(resultadoExibido){
        tela.value = numero;
        resultadoExibido = false;    
    }
    else{
        tela.value += numero
    }
}


function operacao(operador) {
    const tela = document.getElementById('display');

    if (operador === '=') {
        try {
            tela.value = eval(tela.value);
            resultadoExibido = true
        } 
        catch (error) {
            tela.value = 'Erro';
            resultadoExibido = true
        }
    }
    else {
        resultadoExibido = false
        tela.value += operador
    }
}

function apagar() {
    const tela = document.getElementById('display');
    tela.value = ''
    resultadoExibido = false
}