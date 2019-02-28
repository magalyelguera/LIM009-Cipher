

const texto1 = document.getElementById('one');
const desplazamiento1 = document.getElementById('off');
const botonCifrar = document.getElementById('cifrar');
const resultadoCifrado = document.getElementById('resultado1');

const texto2 = document.getElementById('two');
const desplazamiento2 = document.getElementById('on');
const botonDescifrar = document.getElementById('descifrar');
const resultadoDescifrado = document.getElementById('resultado2');

const capturarCifrado =()=>{ 
    let mensajeescrito = texto1.value;
    let numero = parseInt(desplazamiento1.value);
    let nuevomensaje = cipher.encode(numero,mensajeescrito);
    return resultadoCifrado.value = nuevomensaje;

}

botonCifrar.addEventListener('click',capturarCifrado)

const capturarDescifrado =()=>{
    let mensajeescrito2 =texto2.value;
    let numero2 =parseInt(desplazamiento2.value);
    let nuevomensaje2 =cipher.decode(numero2,mensajeescrito2);
    return resultadoDescifrado.value = nuevomensaje2;

}
 botonDescifrar.addEventListener('click',capturarDescifrado)





    