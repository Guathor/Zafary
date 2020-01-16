const Home = document.querySelector("#IHome");
const Zpotyfi = document.querySelector("#IZpotyfi");
const Whatzapp = document.querySelector("#IWhatzapp");

Home.addEventListener("click", cargarHome);
Zpotyfi.addEventListener("click", cargarZpotyfi);
Whatzapp.addEventListener("click", cargarWhatzapp);

const contDinamico = document.querySelector("#contenido");
const nombrePagina = document.querySelector('#nombre-pagina');

function cargarHome() {
    
    contDinamico.setAttribute('src', '../Home/Index.html');
    nombrePagina.innerHTML = 'Home'
}

function cargarZpotyfi() {
    
    contDinamico.setAttribute('src', '../Zpotyfi/Index.html');
    nombrePagina.innerHTML = 'Zpotify'
}

function cargarWhatzapp() {
    
    contDinamico.setAttribute("src", "../WhatzApp/index.html");
    nombrePagina.innerHTML = 'WhatzApp'
}


