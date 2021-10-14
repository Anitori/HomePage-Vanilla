// Cambio lo que se ve en un primer momenro
document.getElementById("fondoMain2").style.display = "none"

// Agrego un div mediante JS
const Prueba = document.createElement("div")
Prueba.setAttribute("id","containerMainZz")
Prueba.textContent = "Por favor ingrese su usuario y contraseña"
document.getElementById("NewDiv").appendChild(Prueba)


// Agrego la función para ver lo escrito en la contraseña

function mostrarContrasena(){
    const tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

const name = document.getElementById("name").value
const password = document.getElementById("password").value
const enviar2 = document.getElementById("btnSave")

/////////////////////////////////////////////////////////// 

class pre {
    constructor({nombre,password}) {
        this.nombre = nombre;
        this.password = password;
    }  
}


let datos = [];

// Mediante este array imprimo en consola los datos ingresados en los inputs
const guardarDatos = () => {

    const ingreso = new pre ({
        nombre : document.getElementById("name").value,
        password : document.getElementById("password").value,
    })

    console.log(ingreso)
    datos = ingreso
    return guardarDatos
}

//Evento que me activa el boton

let ver = document.getElementById("btnSave").addEventListener("click", (e) => {

    e.preventDefault() // Con esta función hago que no se me actualice la página al enviar los datos

    guardarDatos()

    if ((datos.nombre == "asd") && (datos.password == "asd")) {
        document.getElementById("fondoMain2").style.display = "flex"
        document.getElementById("containerMainZz").style.display = "none"
        document.getElementById("form").innerHTML = ``
        document.getElementById("fondoMain2").innerHTML = ` <div id="fondoMain2">
        <!-- Calendario de Mesas -->
        <div id="containerMain2">
            <p id="pMain2">
                <h2>Calendario de mesas por carrera</h2>
                <ul id="aulas2">
                    <li> <a href=" " target="blank" id="CONTADOR">Contador Público </a></li>
                    <li> <a href=" " target="blank"> Abogacía  </a></li>
                    <li> <a href=" " target="blank">Psicología </a></li>
                    <li> <a href=" " target="blank"> Radiología </a></li>
                    <li> <a href=" " target="blank"> Instrumentación Quirúrgia </a></li>
                    <li> <a href=" " target="blank">Psicopedagogía </a></li>
                    <li> <a href=" " target="blank"> Comunicación </a></li>
                    <li> <a href=" " target="blank"> Enlaces (GESTION WEB) </a></li>
                </ul>
            </p>
        </div>
        
<!-- Square complete about reg -->

        <div id="containerMainC">
            <p id="pMainC">
                Regularidades
            </p>
        </div>

        <div id="containerMain3">
            <p id="pMain3">
                <h2>2021 (1er semestre) </h2>
                <ul id="aulas3">

                    <li><a href=" " target="blank">Contador Público</a></li>
                    <li><a href=" " target="blank">Abogacía</a></li>
                    <li><a href=" " target="blank">Psicología</a></li>
                    <li><a href=" " target="blank">Radiología</a></li>
                    <li><a href=" " target="blank">Instrumentación Quirúrgica</a></li>
                    <li><a href=" " target="blank">Acompañante Terapéutico</a></li>
                    <li><a href=" " target="blank">Psicopedagogía</a></li>

                </ul>
            </p>
        </div>

       

        <div id="containerMainX">
            <p id="pMainX">
                <h2>2020 (2do semestre) </h2>
                <ul id="aulasX">

                    <li><a href=" " target="blank">Contador Público</a></li>
                    <li><a href=" " target="blank">Abogacía</a></li>
                    <li><a href=" " target="blank">Psicología</a></li>
                    <li><a href=" " target="blank">Radiología</a></li>
                    <li><a href=" " target="blank">Instrumentación Quirúrgica</a></li>
                    <li><a href=" " target="blank">Comunicación</a></li>
                    <li><a href=" " target="blank">Psicopedagogía</a></li>

                </ul>
            </p>
        </div>


        <div id="containerMainZ">
            <p id="pMainZ">
                <h2>2020 (1er semestre) </h2>
                <ul id="aulasZ">
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Contador Público</a></li>
                    <li class="nashe"><a href=" " target="blank"> ‎      ‏‏‎Abogacía</a></li>
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Psicología</a></li>
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Radiología</a></li>
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Instrumentación Quirúrgica</a></li>
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Psicopedagogía</a></li>
                </ul>
            </p>
        </div>

        <div id="containerMainNew">
            <p id="pMainNew">
                <h2>2020 (1er semestre) </h2>
                <ul id="aulasZ">
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Contador Público</a></li>
                    <li class="nashe"><a href=" " target="blank"> ‎      ‏‏‎Abogacía</a></li>
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Psicología</a></li>
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Radiología</a></li>
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Instrumentación Quirúrgica</a></li>
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Psicopedagogía</a></li>
                </ul>
            </p>
        </div>

<!-- Square about equiv -->
        <div id="containerMainE">
            
            <p id="pMainE">
                Equivalencias
            </p>
        </div>

        <div id="containerMain4">
            <p id="pMain4">
                <h2>Resoluciones</a></h2>
                <ul id="aulas4">
                    <li><a href=" " target="blank">Externas</a></li>
                    <li><a href=" " target="blank">Internas</a></li>
                </ul>
            </p>
        </div>

        <div id="containerMainF">
            <p id="pMainF">
                <h2>Controles</a></h2>
                <ul id="aulasF">     
                    <li><a href=" " target="blank>">Abogacía</a> </li>
                </ul>
            </p>
        </div>

        <div id="containerMain5">
            <p id="pMain5">
                <h2>Información General</a></h2>
                <ul id="aulas5">
                    <li><a href=" " target="blank">► Estadísticas de Inscripción (Ciclo lectivo 2022)</a></li>
                    <li><a href=" " target="blank">► Inscriptos (Ciclo lectivo 2022)</a></li>
                    <li><a href=" " target="blank">► Inscriptos (Ciclo lectivo 2021)</a></li>
                    <li><a href=" " target="blank">►  Documentación alumnos</a></li>
                </ul>
            </p>
        </div>
    </div>    `
       
        

    } else if ((datos.nombre == "qwe") && (datos.password == "qwe")){
        document.getElementById("fondoMain2").style.display = "flex"
        document.getElementById("containerMainZz").style.display = "none"
        document.getElementById("form").innerHTML = ``
        document.getElementById("fondoMain2").innerHTML = `<div id="fondoMain2">
        <!-- Calendario de Mesas -->
        <div id="containerMain2">
            <p id="pMain2">
                <h2>Calendario de mesas por carrera</h2>
                <ul id="aulas2">
                    <li> <a href=" " target="blank">Psicología </a></li>
                    <li> <a href=" " target="blank"> Enlaces (GESTION WEB) </a></li>
                </ul>
            </p>
        </div>
        
<!-- Square complete about reg -->

        <div id="containerMainC">
            <p id="pMainC">
                Regularidades
            </p>
        </div>

        <div id="containerMain3">
            <p id="pMain3">
                <h2>2021 (1er semestre) </h2>
                <ul id="aulas3">
                    <li><a href=" " target="blank">Psicología</a></li>
                    <li><a href=" " target="blank">Acompañante Terapéutico</a></li>
                </ul>
            </p>
        </div>

        <div id="containerMainX">
            <p id="pMainX">
                <h2>2020 (2do semestre) </h2>
                <ul id="aulasX">

                    
                    <li><a href=" " target="blank">Psicología</a></li>
   

                </ul>
            </p>
        </div>


        <div id="containerMainZ">
            <p id="pMainZ">
                <h2>2020 (1er semestre) </h2>
                <ul id="aulasZ">
                    
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Psicología</a></li>
                    
            </p>
        </div>

        <div id="containerMainNew">
            <p id="pMainNew">
                <h2>2020 (1er semestre) </h2>
                <ul id="aulasZ">
                    
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Psicología</a></li>
                    
                </ul>
            </p>
        </div>

<!-- Square about equiv -->
        <div id="containerMainE">
            
            <p id="pMainE">
                Equivalencias
            </p>
        </div>

        <div id="containerMain4">
            <p id="pMain4">
                <h2>Resoluciones</a></h2>
                <ul id="aulas4">
                    <li><a href=" " target="blank">Externas</a></li>
                    <li><a href=" " target="blank">Internas</a></li>
                </ul>
            </p>
        </div>

        <div id="containerMainF">
            <p id="pMainF">
                <h2>Controles</a></h2>
                <ul id="aulasF">     
                    <li><a href=" " target="blank>">Abogacía</a> </li>
                </ul>
            </p>
        </div>

        <div id="containerMain5">
            <p id="pMain5">
                <h2>Información General</a></h2>
                <ul id="aulas5">
                    
                </ul>
            </p>
        </div>
    </div>  `

    } 
    
    else if ((datos.nombre == "zxc") && (datos.password == "zxc")){
        document.getElementById("fondoMain2").style.display = "flex"
        document.getElementById("containerMainZz").style.display = "none"
        document.getElementById("form").innerHTML = ``
        document.getElementById("fondoMain2").innerHTML = `<div id="fondoMain2">
        <!-- Calendario de Mesas -->
        <div id="containerMain2">
            <p id="pMain2">
                <h2>Calendario de mesas por carrera</h2>
                <ul id="aulas2">
                    <li> <a href=" " target="blank">Psicología </a></li>
                    <li> <a href=" " target="blank"> Enlaces (GESTION WEB) </a></li>
                </ul>
            </p>
        </div>
        
<!-- Square complete about reg -->

        <div id="containerMainC">
            <p id="pMainC">
                Regularidades
            </p>
        </div>

        <div id="containerMain3">
            <p id="pMain3">
                <h2>2021 (1er semestre) </h2>
                <ul id="aulas3">
                    <li><a href=" " target="blank">Psicología</a></li>
                    <li><a href=" " target="blank">Acompañante Terapéutico</a></li>
                </ul>
            </p>
        </div>

        <div id="containerMainX">
            <p id="pMainX">
                <h2>2020 (2do semestre) </h2>
                <ul id="aulasX">

                    
                    <li><a href=" " target="blank">Psicología</a></li>
   

                </ul>
            </p>
        </div>


        <div id="containerMainZ">
            <p id="pMainZ">
                <h2>2020 (1er semestre) </h2>
                <ul id="aulasZ">
                    
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Psicología</a></li>
                    
            </p>
        </div>

        <div id="containerMainNew">
            <p id="pMainNew">
                <h2>2020 (1er semestre) </h2>
                <ul id="aulasZ">
                    
                    <li class="nashe"><a href=" " target="blank">‎      ‏‏‎Psicología</a></li>
                    
                </ul>
            </p>
        </div>

<!-- Square about equiv -->
        <div id="containerMainE">
            
            <p id="pMainE">
                Equivalencias
            </p>
        </div>

        <div id="containerMain4">
            <p id="pMain4">
                <h2>Resoluciones</a></h2>
                <ul id="aulas4">
                    <li><a href=" " target="blank">Externas</a></li>
                    <li><a href=" " target="blank">Internas</a></li>
                </ul>
            </p>
        </div>

        <div id="containerMainF">
            <p id="pMainF">
                <h2>Controles</a></h2>
                <ul id="aulasF">     
                    <li><a href=" " target="blank>">Abogacía</a> </li>
                </ul>
            </p>
        </div>

        <div id="containerMain5">
            <p id="pMain5">
                <h2>Información General</a></h2>
                <ul id="aulas5">
                    <li><a href=" " target="blank">► Estadísticas de Inscripción (Ciclo lectivo 2022)</a></li>
                    <li><a href=" " target="blank">► Inscriptos (Ciclo lectivo 2022)</a></li>
                    <li><a href=" " target="blank">► Inscriptos (Ciclo lectivo 2021)</a></li>
                    <li><a href=" " target="blank">►  Documentación alumnos</a></li>
                </ul>
            </p>
        </div>
    </div>  ` }
    
    else{
        document.getElementById("form").innerHTML = ``
        document.getElementById("containerMainZz").innerHTML = `<div> Contraseña incorrecta </div>`

    }
})














// Funcion que me lo agregue al storage

const agregarDatosDeFormularioAlStorage = (object) => {
    datos.push(object)
    console.log(datos)
}

//Guardar en base de datos

const guardarEnBaseDeDatos = () => {
    let dato = verificarLista()
    localStorage.setItem("datos", JSON.stringify(lista))
}




// if (document.getElementById("name").value == "elexicon" && document.getElementById("password").value == "elexicon"){
//     const div = document.querySelector(".info");
//     div.innerHTML = "";

// } else (document.getElementById("name").value != "elexicon" && document.getElementById("password").value != "elexicon");{
//     const div = document.querySelector(".main2");
//     div.innerHTML = "<strong> Contraseña Inválida </strong>"
