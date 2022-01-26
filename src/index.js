import cipher from './cipher.js';
const mensaje = document.getElementById("texto");
const desplazamiento = document.getElementById("numero");
const general = document.getElementById("general");
const mensajeCodificar = document.getElementById("codificado");
const mensajeDecodificar = document.getElementById("decodificado");
const codificar = document.getElementById("btn1");
const decodificar = document.getElementById("btn2");

codificar.addEventListener("click", () => { 
    const texto = mensaje.value;
    const dz = parseInt(desplazamiento.value);
    if (texto == ""){
        general.innerHTML = "Ingresa texto en la casilla"
    }else if (dz <=0 ){
        general.innerHTML = "Ingresar un desplazamiento mayor a 0"
    }else{
        mensajeCodificar.innerHTML = cipher.encode(dz,texto);
    }
});
decodificar.addEventListener("click", () => {
    const texto = mensaje.value;
    const dz = parseInt(desplazamiento.value);
    if (texto == ""){
        general.innerHTML = "Ingresa texto en la casilla"
    }else if (dz <=0 ){
        general.innerHTML = "Ingresar un desplazamiento mayor a 0"
    }else{
        mensajeDecodificar.innerHTML = cipher.decode(dz,texto);
    }
});
