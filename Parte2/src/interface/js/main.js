import { NuevaNota } from "./nuevaNota.js";
import { NotasList } from "./Notaslist.js";


const botonG  = document.getElementById('botonG');
const tituloNota = document.getElementById('tituloNuevaNota');
const textoNota = document.getElementById('textAreaNota');

const mainNotaslist = new NotasList();

botonG.addEventListener('click', () => {
  const new_nota = new NuevaNota(tituloNota.value);

  //esto no se que es
  const countriesErrorContainer = document.getElementById("add-countries-error");
  const countriesError = document.getElementById("add-countries-error-msg");
  
  newCountry.setCapital(inpCapital.value);
  try
  {
    mainCountryList.add(newCountry);
    clearInputs();
    countriesErrorContainer.classList.add("d-none");
    loadCountryList(newCountry);
  }
  catch (error)
  {
    countriesErrorContainer.classList.remove("d-none");
    countriesError.innerText = error;
  }
});

function clearInputs() {
  inpName.value = "";
  inpCapital.value = "";
}

function loadCountryList(newCountry) {
  const countriesList = document.getElementById("countries-list");
  const countriesContainer = document.getElementById("countries");
  const emptyList = document.getElementById("empty-list");
  
  emptyList.classList.add('d-none');
  countriesContainer.classList.remove("d-none");
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText = newCountry.toString();
  countriesList.appendChild(li);
}

inpCapital.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    botonG.click();
  }
});

/*
function saveNote() {
    var titulo = document.getElementById("tituloNuevaNota").value;
    var note = document.getElementById("textareaNota").value;
    // Aquí puedes hacer algo con los valores, como guardarlos en el almacenamiento local o enviarlos a un servidor
    console.log("Título: " + titulo);
    console.log("Nota: " + note);
    // Puedes añadir aquí la lógica para guardar los datos en algún lugar
}*/

const sistema = new Sistema(); // Añade paréntesis para crear una instancia de la clase

function saveNote() {
    let formulario = document.getElementById("formularioNota");
    if (formulario.reportValidity()) {
        let titulo = document.getElementById("tituloNuevaNota").value;
        let texto = document.getElementById("textAreaNota").value;

        let unaNota = new Nota(titulo, texto);
        sistema.agregarNota(unaNota);
        formulario.reset();
        cargarNotas(); 
        alert("Llenar todos los campos");
    }
}

function cargarNotas() {
    const notasGuardadas = document.getElementById("notasGuardadas");
  
    notasGuardadas.innerHTML = "";

    for (const nota of sistema.listaNotas) { 
      const notaElement = document.createElement("div");
      notaElement.classList.add("nota"); 
  
      const tituloElement = document.createElement("h3");
      tituloElement.textContent = nota.titulo;
  
      const textoElement = document.createElement("p");
      textoElement.textContent = nota.texto;
  
      notaElement.appendChild(tituloElement);
      notaElement.appendChild(textoElement);

      notasGuardadas.appendChild(notaElement);
    }
}