
import Notaslist from "./Notaslist.js";
import NuevaNota from "./nuevaNota.js";

const botonG  = document.getElementById('botonG');
const tituloNota = document.getElementById('tituloNuevaNota');
const textoNota = document.getElementById('textAreaNota');

const notalista = new Notaslist();
//instanciar notaslist

botonG.addEventListener('click', () => {
  // Obtener los valores del título y la nota
  const titulo = document.getElementById('tituloNuevaNota').value;
  const texto = document.getElementById('textAreaNota').value;
  const new_nota = new NuevaNota(titulo, texto);
  notalista.enListar(new_nota);
  limpiar();


  // Mostrar la lista de notas en la consola para verificar
  console.log(listaNotas);
 
});


function limpiar() {
    tituloNota.value = "";
    textoNota.value = "";
}

window.saveNote = function() {
  
};



function CargarNotas(new_nota) {
  const countriesList = document.getElementById("notes-list");
  const containerNotas = document.getElementById("notasGuardadas");
  const emptyList = document.getElementById("empty-list");
  
  emptyList.classList.add('d-none');
  containerNotas.classList.remove("d-none");
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText = new_nota.toString();
  countriesList.appendChild(li);
}

//no entiendo que es
/*
inpCapital.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    botonG.click();
  }
});
*/



//const sistema = new Sistema(); // Añade paréntesis para crear una instancia de la clase

function cargarNotas() {
    const notasGuardadas = document.getElementById("notasGuardadas");
  
    notasGuardadas.innerHTML = "";

    for (const nota of sistema.listaNotas) { 
      const notaElement = document.createElement("div");
      notaElement.classList.enListar("nota"); 
  
      const tituloElement = document.createElement("h3");
      tituloElement.textContent = nota.titulo;
  
      const textoElement = document.createElement("p");
      textoElement.textContent = nota.texto;
  
      notaElement.appendChild(tituloElement);
      notaElement.appendChild(textoElement);

      notasGuardadas.appendChild(notaElement);
    }
}
