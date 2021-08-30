console.log('Tamo bien');

function sumar(){
    const forma = document.getElementById('forma');
    let a = forma['operandoA'];
    let b = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado ='La opereacion no tiene numeros';
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
    console.log(resultado);
}
function restar(){
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no tiene numeros';
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
}
function multiplicar(){
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no tiene numeros';
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
}
function dividir(){
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no tiene numeros';
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
}
function elevar(){
    let resultado = Math.pow(operandoA.value, operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no tiene numeros';
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
}