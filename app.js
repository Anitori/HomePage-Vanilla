// let pwd = prompt("Ingrese la contraseña para acceder");

// Cambio lo que se ve en un primer momenro
document.getElementById("fondoMain2").textContent = ""

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

const enviar = document.getElementById("submit")
const enviar2 = document.getElementById("btnSave")

/////////////////////////////////////////////////////////// 

class pre {
    constructor({nombre,password}) {
        this.nombre = nombre;
        this.password = password;
    }  
}

let datos = [];

const guardarDatos = () => {

    const ingreso = new pre ({
        nombre : document.getElementById("name").value,
        password : document.getElementById("password").value,
    })

    console.log(guardarDatos)
    return guardarDatos
}

const verificarLista = () => {

    let datos;

    if (localStorage.getItem("datos") != null ) {
        datos = JSON.parse(localStorage.getItem("datos")
     } 
        
        else {
            return dato = []

    }
}

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


//Evento que me activa el boton

document.getElementById("btnSave").addEventListener("click", (e) => {
    
    guardarDatos()
})




// Para que no se me actualice la página al tocar enviar
enviar.addEventListener("click", (e) => {
    e.preventDefault()
})

enviar2.addEventListener("click", (e) => {
    e.preventDefault()
})



// if (document.getElementById("name").value == "elexicon" && document.getElementById("password").value == "elexicon"){
//     const div = document.querySelector(".info");
//     div.innerHTML = "";

// } else (document.getElementById("name").value != "elexicon" && document.getElementById("password").value != "elexicon");{
//     const div = document.querySelector(".main2");
//     div.innerHTML = "<strong> Contraseña Inválida </strong>"
