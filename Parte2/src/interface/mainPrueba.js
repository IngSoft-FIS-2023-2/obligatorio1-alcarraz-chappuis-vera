// main.js

import { Notaslist } from "../domain/Notaslist"; 
import { Nota } from "../domain/nuevaNota"; 

// Obtener el contenedor de notas
const notasContainer = document.getElementById("notas-section");
const nuevaNotaContainer = document.getElementById("nuevaNota-section");
const calendarioContainer = document.getElementById("calendario-section"); 


const btnAdd = document.getElementById('btn-add');
const inpName = document.getElementById('inp-name');
const inpCapital = document.getElementById('inp-capital');

const mainNotasList = new Notaslist();
// Intentar cargar notas guardadas al cargar la página

btnAdd.addEventListener('click', () => {
    const titulo = inpName.value;
    const descripcion = inpCapital.value;
    const nuevaNota = new Nota(titulo, descripcion);

    const countriesErrorContainer = document.getElementById("add-countries-error");
    const countriesError = document.getElementById("add-countries-error-msg");
    
    newCountry.setCapital(inpCapital.value);
    try
    {
      mainCountryList.add(newCountry);
      clearInputs1();
      countriesErrorContainer.classList.add("d-none");
      loadCountryList(newCountry);
    }
    catch (error)
    {
      //countriesErrorContainer.classList.remove("d-none");
      //countriesError.innerText = error;
    }
  });

  function clearInputs1() {
    inpName.value = "";
    inpCapital.value = "";
  }












aparecerNotas();
aparecerNuevaNota();
aparecerCalendario();
toggleSection();
function aparecerNotas() {
    if(notasContainer.style.display === "none"){
        notasContainer.style.display = 'block';
        nuevaNotaContainer.style.display = 'none';
        calendarioContainer.style.display = 'none';
        mostrarNotas(mainNotasList.getNotasList());
    }
    notasContainer.style.display = 'none';
    draw();

    
}

function toggleSection() {
    if (nuevaNotaContainer.style.display === "none") {
        nuevaNotaContainer.style.display = "block";
    } else {
        calendarioContainer.style.display = "none";
        notasContainer.style.display = 'none';
    }
}



function aparecerCalendario() {
    var container =document.getElementsByClassName("calendario-section")[0];
    if(container.style.visibility == "hidden"){
        container.style.visibility = "visible";
    }else{
        container.style.visibility = "hidden";
    }
}

function aparecerNuevaNota() {
    if (nuevaNotaContainer.style.display === "none") {
        nuevaNotaContainer.style.display = "block";
    } else {
        calendarioContainer.style.display = "none";
        notasContainer.style.display = 'none';
    }
}
btnAdd.addEventListener('click', () => {
    var titulo = document.getElementById("tituloNuevaNota").value;
    var descripcion = document.getElementById("textAreaNota").value;

    const nuevaNota = new Nota(titulo, descripcion);

    try {
        mainNotasList.enListar(nuevaNota);
        clearInputs();
        mostrarNotas(mainNotasList.getNotasList());
    } catch (error) {
        console.error(error.message);
    }
});

function clearInputs() {
    document.getElementById("tituloNuevaNota").value = "";
    document.getElementById("textAreaNota").value = "";
}

function mostrarNotas(notas) {
    notasContainer.innerHTML = "";

    notas.forEach(nota => {
        const card = document.createElement('div');
        card.className = "card text-white bg-primary mb-3";
        card.style = "max-width: 18rem;";

        const cardHeader = document.createElement('div');
        cardHeader.className = "card-header";
        cardHeader.textContent = nota.getTitulo();

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const cardTitle = document.createElement('h5');
        cardTitle.className = "card-title";
        cardTitle.textContent = nota.getTitulo();

        const cardText = document.createElement('p');
        cardText.className = "card-text";
        cardText.textContent = nota.getTexto();

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        notasContainer.appendChild(card);
    });
}
