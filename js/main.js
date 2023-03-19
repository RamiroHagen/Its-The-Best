///////////////////////////////////////DECLARACION DE VARIABLES GLOBALES//////////////////////////////////////////

let cuenta = 0;
let valor = 0;
let segundos = 9;
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const contenedorJuego = document.getElementById("contenedorJuego");
const contenedorPrincipal = document.getElementById("contenedorPrincipal");
const candidatos = document.getElementById("candidatos");
const continuar = document.getElementById("continuar");
const contenedorCandidatos = document.getElementById("contenedorCandidatos");
const contenedorFinal = document.getElementById("contenedorFinal")
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const listaCandidatos = [];
const listaFinal = [];
const arrayGanador = [];

//////////////////////////////////////////////////////////CARDS//////////////////////////////////////////////////////////

const mostrarElementos = (Elementos) => {
    card1.classList.add();
    card1.innerHTML = `
                        <div>
                            <button class= "cardElementos" id= "boton${Elementos.id}">
                                <div class= "transparentTitulos"></div>
                                <img src= "${Elementos.img}" class="imgElementos" alt="${Elementos.nombre}">
                                <h3 class= "textoElementos">${(Elementos.nombre.toUpperCase())}</h3>
                            </button>
                        </div>
                    `
    
    contenedorJuego.appendChild(card1);
    
    const boton1 = document.getElementById(`boton${Elementos.id}`);
    boton1.addEventListener("click", () => {
        contadorRondas();
        cambiarElemento1(Elementos.id);
        botonCandidato(Elementos.repeticiones);
    })
}
    

const mostrarElementos2 = (Elementos) => {
    card2.classList.add();
    card2.innerHTML = `
                        <div>
                            <button class= "cardElementos" id= "boton${Elementos.id}">
                                <div class= "transparentTitulos"></div>
                                <img src= "${Elementos.img}" class="imgElementos" alt="${Elementos.nombre}">
                                <h3 class= "textoElementos">${(Elementos.nombre.toUpperCase())}</h3>
                            </button>
                        </div>
                    `
    
    contenedorJuego.appendChild(card2);
    
    const boton2 = document.getElementById(`boton${Elementos.id}`);
    boton2.addEventListener("click", () => {
        contadorRondas();
        cambiarElemento2(Elementos.id);
        botonCandidato(Elementos.repeticiones);   
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mostrarCandidato = (Elementos) => {
    card3.classList.add();
    card3.innerHTML = `
                        <div>
                            <button class= "cardElementos" id= "candidato${Elementos.id}">
                                <div class= "transparentTitulos"></div>
                                <img src= "${Elementos.img}" class="imgElementos" alt="${Elementos.nombre}">
                                <h3 class= "textoElementos">${(Elementos.nombre.toUpperCase())}</h3>
                            </button>
                        </div>
                    `
    
    contenedorFinal.append(card3);
    
    const boton1 = document.getElementById(`candidato${Elementos.id}`);
    boton1.addEventListener("click", () => {
        cambiarCandidato(Elementos.id);
        final();
        ganador(Elementos.id);
    })
}
    

const mostrarCandidato2 = (Elementos) => {
    card4.classList.add();
    card4.innerHTML = `
                        <div>
                            <button class= "cardElementos" id= "candidato${Elementos.id}">
                                <div class= "transparentTitulos"></div>
                                <img src= "${Elementos.img}" class="imgElementos" alt="${Elementos.nombre}">
                                <h3 class= "textoElementos">${(Elementos.nombre.toUpperCase())}</h3>
                            </button>
                        </div>
                    `
    
    contenedorFinal.append(card4);
    
    const boton2 = document.getElementById(`candidato${Elementos.id}`);
    boton2.addEventListener("click", () => { 
        cambiarCandidato2(Elementos.id);
        final();
        ganador(Elementos.id);
    })
}


////////////////////////////////////////////////////EJECUCION/////////////////////////////////////////////////////////////////////

menu();

////////////////////////////////////////////////////FUNCIONES//////////////////////////////////////////////////////////////////////

function menu(){
    const contenedorMenu = document.getElementById("contenedorMenu");
    contenedorMenu.innerHTML = `<div class="menu">
                                    <div class="d-flex justify-content-center">
                                        <img class="imagenMenu" src="../Multimedia/Principal/logo.png" alt="">
                                    </div>

                                    <div>
                                        <h3 style="margin-left: 180px;" class="titulosLg">IT'S THE BEST</h3>
                                    </div>

                                    <div>
                                        <audio id="audio">
                                            <source src="../Multimedia/JazzHop.mp3" type="audio/mp3">
                                        </audio>

                                        <button class="tamañoPlayMuteMenu" id="playPauseBtn" onclick="playPause()">
                                            <img  width="25px" height="25px" src="../Multimedia/Principal/volume-play.png" alt="Play y Mute Musica">
                                        </button>
                                    </div>

                                    <div class="boxBotonesMenu">

                                        <div class="d-flex row align-items-center" style="padding-right: 150px;width: 400px; margin-top: 45px;">
                                        <select style="margin-top: 15px; text-align: center; height: 35px; border-radius: 1rem; font-family: 'Alumni Sans', sans-serif; font-family: 'Quicksand', sans-serif;" id="categorias">
                                            <option value="Seleccione una categoría">Seleccione una categoría</option>
                                            <option value="Comida y Bebida">Comida y Bebidas</option>
                                            <option value="Acciones">Acciones</option>
                                            <option value="Musica">Musica</option>
                                        </select>  
                                    
                                        <button class="botonDefault" style="margin-left:0px; margin-top:35px;">
                                            <h3 id="botonJugar">JUGAR</h3>
                                        </button>
                                        </div>

                                        <div class="d-flex row align-items-center" style="width: 300px; margin-top: 45px;">
                                        <div>
                                            <h6 style="font-size: medium; margin-left: 18px;">El modo en el que se unen todas las categorias y decidiras el mejor de todos los tiempos!</h6>
                                        </div>
                                        <button class="botonDefault">
                                            <h3 id="botonFFA">FREE-FOR-ALL</h3>
                                        </button> 
                                        </div>
                                    </div>
                                </div>
                                `
    contenedorJuego.append(contenedorMenu);     
    const botonAcciones = document.getElementById(`botonJugar`);
    const botonFFA = document.getElementById(`botonFFA`);
        botonAcciones.addEventListener("click", () => {
        const categorias = document.getElementById('categorias');
        const categoriaSeleccionada = categorias.value;
            if (categoriaSeleccionada === 'Seleccione una categoría') {
                (async () => {
                    await Swal.fire({                    
                      title: 'UPS..',
                      text:'Debes seleccionar una categoria para comenzar el juego.',
                      color: 'aliceblue',
                      background: '#50236B',
                      confirmButtonText: 'Aceptar',
                    })
                    })()
            }else if (categoriaSeleccionada === 'Comida y Bebida') {
                console.log(categoriaSeleccionada);
                contenedorJuego.removeChild(contenedorMenu);
                mostrarContenedorJuego();
                const value = arrayComidaBebida;
                primeraEtapa(value);
            }else if (categoriaSeleccionada === 'Acciones') {
                console.log(categoriaSeleccionada);
                contenedorJuego.removeChild(contenedorMenu);
                mostrarContenedorJuego();
                const value = arrayAcciones;
                primeraEtapa(value);
            }else if (categoriaSeleccionada === 'Musica') {
                console.log(categoriaSeleccionada);
                contenedorJuego.removeChild(contenedorMenu);
                mostrarContenedorJuego();
                const value = arrayMusica;
                primeraEtapa(value);
            }   
        })
        
        botonFFA.addEventListener("click", () => {
            const arrayFFA = arrayComidaBebida.concat(arrayAcciones, arrayMusica);
            contenedorJuego.removeChild(contenedorMenu);
            mostrarContenedorJuego();
            const value = arrayFFA;
            primeraEtapa(value);
        })
}

function primeraEtapa(value) {
    let iterar = randomArray(value);
    let iterar2 = randomArray(value);
    mostrarElementos(iterar);
    mostrarElementos2(iterar2);
}


const  cambiarElemento1 = (id) => {
    const elementoDefinido = arrayAcciones.find((Elementos) => Elementos.id === id);
    elementoDefinido.repeticiones++; 
    let cambiar = randomArray(arrayAcciones);
    if(cambiar == elementoDefinido){
        cambiarElemento1(elementoDefinido.id);
    }
    mostrarElementos2(cambiar);  
}


const  cambiarElemento2 = (id) => {
    const elementoDefinido = arrayAcciones.find((Elementos) => Elementos.id === id);
    elementoDefinido.repeticiones++;    
    let cambiar = randomArray(arrayAcciones);
    if(cambiar == elementoDefinido){
        cambiarElemento1(elementoDefinido.id);
    }
    mostrarElementos(cambiar);
    mostrarElementos2(elementoDefinido);

}

function randomArray(value){
    let random = Math.random()* value.length | 0;
    let valorRandom = value[random];
    return valorRandom;
}

function contadorRondas(){
    const contador = document.getElementById("contador");
    cuenta++;
    contador.innerHTML = `
                        <div>
                            <h3>RONDA ${cuenta}</h3>
                        </div>
                        `
    contenedorPrincipal.appendChild(contador);
}

function mostrarContenedorJuego(){
    contenedorPrincipal.innerHTML = `
                                    <div id="cont" class="contenedorJuegoPrincipal">
                                        <div class="rondas" id="contador">
                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <img class="logoCENTROJuego" src="../Multimedia/Principal/logo.png" alt="">
                                        </div>

                                        <div class="esMejorQue">
                                            <h3>ES MEJOR QUE..?</h3>
                                        </div>

                                        <button class="BotonCandidatos" id="candidatos">
                                        </button>

                                    </div>

                                        <div>
                                            <audio id="audio">
                                                <source src="../Multimedia/JazzHop.mp3" type="audio/mp3">
                                            </audio>

                                            <button class="tamañoPlayMuteJuego" id="playPauseBtn" onclick="playPause()">
                                                <img width="35px" height="35px" src="../Multimedia/Principal/volume-play.png" alt="Play y Mute Musica">
                                            </button>
                                        </div>

                                        <div class="candidatos d-flex justify-content-evenly align-items-center" id="contenedorCandidatos">
                                            <div class="cajasCandidatos"></div>
                                            <div class="cajasCandidatos"></div>
                                            <div class="cajasCandidatos"></div>
                                            <div class="cajasCandidatos"></div>
                                    </div>
                                    `
    contenedorJuego.append(contenedorPrincipal); 
}


const botonCandidato = (repeticiones) => {
const accionBotonCandidatos = arrayAcciones.find((Elementos) => Elementos.repeticiones === repeticiones);

    if (accionBotonCandidatos.repeticiones >= 3){
        candidatos.innerHTML = `<h4 class="titulosSmall"> CANDIDATO </h4>`
        contenedorPrincipal.appendChild(candidatos);
        candidatos.addEventListener("click", () => {
        seleccionCandidato(accionBotonCandidatos.id);
        })  
    }

    else{     
		contenedorPrincipal.removeChild(candidatos);
        reiniciarRepe = 0;
        arrayAcciones.forEach(Elementos => {
        Elementos.repeticiones = reiniciarRepe;
        })
    }
}

const seleccionCandidato = (id) => {
    const elementoDefinido = arrayAcciones.find((Elementos) => Elementos.id === id);
    if(elementoDefinido == undefined){
    }else if(elementoDefinido.id === id && elementoDefinido.repeticiones >= 3){
    let indice = arrayAcciones.indexOf(elementoDefinido);
    arrayAcciones.splice (indice, 1);
    iteracionNueva()
    contenedorPrincipal.removeChild(candidatos);
    guardarCandidato(elementoDefinido);
    }
}

function iteracionNueva() {
    const iterarUno = randomArray(arrayAcciones);
    const iterarDos = randomArray(arrayAcciones);
    mostrarElementos(iterarUno);
    mostrarElementos2(iterarDos);
}

function guardarCandidato(elementoDefinido) {
    listaCandidatos.push(elementoDefinido);
    console.log(listaCandidatos);
    console.log(listaCandidatos.length);
    if (listaCandidatos.length === 1){
        const uno = document.getElementById("uno");
        uno.innerHTML = `<div class="candidatoUno">
                        <img clas="" src= "${elementoDefinido.img}" class="imagenCandidatoSeleccion" alt="${elementoDefinido.nombre}">
                        </div>      
                         `
        contenedorCandidatos.append(uno);
    }
    else if (listaCandidatos.length === 2){
        const dos = document.getElementById("dos");
        dos.innerHTML = `<div class="candidatoDos">
                        <img clas="" src= "${elementoDefinido.img}" class="imagenCandidatoSeleccion" alt="${elementoDefinido.nombre}">
                        </div>   
                        `
        contenedorCandidatos.append(dos);
    }
    else if (listaCandidatos.length === 3){
        const tres = document.getElementById("tres");
        tres.innerHTML = `<div class="candidatoTres">
                        <img clas="" src= "${elementoDefinido.img}" class="imagenCandidatoSeleccion" alt="${elementoDefinido.nombre}">
                        </div>   
                        `
        contenedorCandidatos.append(dos);
    }
    else if (listaCandidatos.length === 4){
        const cuatro = document.getElementById("cuatro");
        cuatro.innerHTML = `<div class="candidatoCuatro">
                        <img clas="" src= "${elementoDefinido.img}" class="imagenCandidatoSeleccion" alt="${elementoDefinido.nombre}">
                        </div>   
                        `
        contenedorCandidatos.append(dos);
    }
    verificar();                            
}

function verificar() {
    if (listaCandidatos.length >= 4){
        continuar.innerHTML = `<h4 class="titulosSmall"> CONTINUAR </h4>`
        contenedorJuego.append(continuar);
        contenedorPrincipal.removeChild(contador)
        const botonContinuar = document.getElementById(`continuar`);
        botonContinuar.addEventListener("click", () => {
            segundaEtapa()
            reiniciarRepe = 0;
            listaCandidatos.forEach(Elementos => {
            Elementos.repeticiones = reiniciarRepe;
            })
        })  
    }
}

//LocalStorage
function playPause() {
    if(valor == 0){
        valor = 1;
        audio.play();
        localStorage.setItem("reproduccion", 1);
    }else{
        valor = 0;
        audio.pause();  
        localStorage.setItem("reproduccion", 0);
    }
}
const reproduccion = localStorage.getItem("reproduccion");
if(reproduccion == 1){
    valor = 0;
    playPause();
}
/////////////

function actualizarTiempo() {
    document.getElementById("tiempo").innerHTML =`<div class="cuadroTiempo">0${segundos}
                                                </div>`
    if (segundos === 0){
        cambiarCandidato();
        actualizarTiempo();
        if(listaFinal.length == 2){
            final();
            ganador();
        }
    }else{
        segundos--;
        setTimeout("actualizarTiempo()", 790);
    }
}

function iteracionCandidatos() {
    let iterar = listaCandidatos[1];
    let iterar2 = listaCandidatos[3];
    mostrarCandidato(iterar);
    mostrarCandidato2(iterar2);
    actualizarTiempo();
}

const  cambiarCandidato = (id) => {
    if(listaCandidatos.length == 4 || listaCandidatos.length == 3){
        const elementoDefinido = listaCandidatos.find((Elementos) => Elementos.id === id);
        let cambiar = listaCandidatos[0];
        let cambiar2 = listaCandidatos[2];
        let indice = listaCandidatos.indexOf(elementoDefinido);
        const elementoEliminado = listaCandidatos.splice(indice, 1)[0];
        listaFinal.push(elementoEliminado);
        mostrarCandidato2(cambiar);
        mostrarCandidato(cambiar2);
        segundos = 9;
    }
}

const  cambiarCandidato2 = (id) => {
    if(listaCandidatos.length == 4 || listaCandidatos.length == 3){
        const elementoDefinido = listaCandidatos.find((Elementos) => Elementos.id === id); 
        let cambiar = listaCandidatos[2]
        let cambiar2 = listaCandidatos[0];
        let indice = listaCandidatos.indexOf(elementoDefinido);
        const elementoEliminado = listaCandidatos.splice(indice, 1)[0];
        listaFinal.push(elementoEliminado);
        mostrarCandidato(cambiar);
        mostrarCandidato2(cambiar2);
        segundos = 9;
    }
}

function final(){
    if(listaFinal.length == 2){
    let cambiar = listaFinal[0];
    let cambiar2 = listaFinal[1];
    mostrarCandidato(cambiar);
    mostrarCandidato2(cambiar2);
    segundos = 9;
    }
}

const  ganador = (id) => {
    const elementoDefinido = listaFinal.find((Elementos) => Elementos.id === id);
    if(elementoDefinido == undefined){
    }else if(elementoDefinido.repeticiones == 0){
        elementoDefinido.repeticiones++;
    }else if(elementoDefinido.repeticiones == 1){
        contenedorJuego.remove();
        const cuadroFinal = document.getElementById("cuadroFinal");
        randomPuntaje();
        cardFinal.innerHTML = `<div class="textoGanador">
                                <h5>TERMINASTE!</h5>
                                <h6>EL MEJOR DE TODOS ES . . .</h6>
                            </div>
        
                            <div class="d-flex">
                                <img src="../Multimedia/Principal/corona.png" class="coronaFinal" alt="">
                                <button class= "cardElementosGanador" id= "candidato${elementoDefinido.id}">
                                    <div class= "transparentTitulosGanador"></div>
                                    <img src= "${elementoDefinido.img}" class="imgElementosGanador" alt="${elementoDefinido.nombre}">
                                    <h3 class= "textoElementos">${(elementoDefinido.nombre.toUpperCase())}</h3>
                                </button>

                                <div class="d-flex justify-contet-center align-items-center">
                                    <div>
                                        <h6 class="puntaje borde">Tu Puntaje:</h6>
                                    </div>
                                    <button class="botonDefault continuarFinal" id="registrarUsuario">
                                        <h4 class="titulosSmall"> CONTINUAR </h4>
                                    </button>
                                </div>
                            </div>
                            `
        cuadroFinal.append(cardFinal);
        const botonContinuar = document.getElementById("registrarUsuario");
        botonContinuar.addEventListener("click", () => {
            (async () => {

                const { value: email } = await Swal.fire({
                  imageUrl: '../Multimedia/Principal/detalle3.png',
                  imageHeight: 290,
                  imageAlt: 'Logo Its the Best',                    
                  title: 'TERMINO EL JUEGO!',
                  input: 'email',
                  inputLabel:'Ingresa tu Mail',
                  inputPlaceholder: 'Su Mail',
                  color: 'aliceblue',
                  background: '#50236B',
                  confirmButtonText: 'Enviar',
                })
                if (email) {
                  Swal.fire(`Entered email: ${email}`)
                  redireccion()
                }
                })()
                
        })  
    }
}

function redireccion() {
    window.open("../../index.html", "_self");
}

function randomPuntaje(){
    let puntos = Math.random()* 8000 | 1000;
    const puntaje = document.getElementById("puntaje");
    puntaje.innerHTML = `
                        <div>
                            <h3 class="puntos">${puntos} </h3>
                        </div>
                        `
    cuadroFinal.append(puntaje);
}

function segundaEtapa(){
    iteracionCandidatos();
    contenedorJuego.innerHTML = `<div class="cuadroFinal">
                                        <div class="d-flex justify-content-center">
                                            <img class="logoCENTROFinal" src="../Multimedia/Principal/corona.png" alt="">
                                        </div>

                                        <div class="esMejorQue">
                                            <h3>ES MEJOR QUE..?</h3>
                                        </div>

                                        <div>
                                            <audio id="audio">
                                                <source src="../Multimedia/JazzHop.mp3" type="audio/mp3">
                                            </audio>

                                            <button class="playMuteFinal" id="playPauseBtn" onclick="playPause()">
                                                <img width="35px" height="35px" src="../Multimedia/Principal/volume-play.png" alt="Play y Mute Musica">
                                            </button>
                                        </div> 
                                    </div>
                                    
                                    <div class="d-flex justify-content-center align-items-center cajaFinal">
                                        <img class="logo" src="../Multimedia/Principal/logo.png" alt="Logo Principal">
                                        <p class="logoTexto">IT'S THE BEST</p>
                                    </div>
                                `
    contenedorJuego.appendChild(contenedorFinal);
}

