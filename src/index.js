function ir(){
    let name= document.getElementById("name").value;
    document.getElementById("bienvenida").innerHTML = "bienvenid@, " + name;

    document.getElementById("todo").style.display="none";
    document.getElementById("box2").style.display="block";
}
const texto1 = document.getElementById('one-mensaje');
const desplazamiento1 = document.getElementById('off');
const botonCifrar = document.getElementById('cifrar');
const resultadoCifrado = document.getElementById('resultado1');

const texto2 = document.getElementById('two');
const desplazamiento2 = document.getElementById('on');
const botonDescifrar = document.getElementById('descifrar');
const resultadoDescifrado = document.getElementById('resultado2');



const capturarCifrado =()=>{ 
    let mensajeEscrito = texto1.value;
    let numero = parseInt(desplazamiento1.value);
    let nuevoMensaje = cipher.encode(numero,mensajeEscrito);
    return resultadoCifrado.value = nuevoMensaje;

}

botonCifrar.addEventListener('click',capturarCifrado)

const capturarDescifrado =()=>{
    let mensajeEscrito2 =texto2.value;
    let numero2 =parseInt(desplazamiento2.value);
    let nuevoMensaje2 =cipher.decode(numero2,mensajeescrito2);
    return resultadoDescifrado.value = nuevoMensaje2;

}
 botonDescifrar.addEventListener('click',capturarDescifrado)





    