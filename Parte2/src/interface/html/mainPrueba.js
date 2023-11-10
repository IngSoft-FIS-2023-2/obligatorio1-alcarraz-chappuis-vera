// main.js

import Nota from "../js/nuevaNota.js";
import Notaslist from "../js/Notaslist.js";

// Obtener el contenedor de notas
const notasContainer = document.getElementById("notas-section");
const nuevaNotaContainer = document.getElementById("nuevaNota-section");
const calendarioContainer = document.getElementById("calendario-section"); // Agregar el contenedor del calendario


const btnAdd = document.getElementById('botonG');
const mainNotasList = new Notaslist();
// Intentar cargar notas guardadas al cargar la página
aparecerNotas();
aparecerNuevaNota();
aparecerCalendario();
toggleSection();
function aparecerNotas() {
    if(notasContainer.style.display === "none"){
        notasContainer.style.display = 'block';
        nuevaNotaContainer.style.display = 'none';
        calendarioContainer.style.display = 'none';
        mostrarNotas(mainNotasList.getCountries());
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
    notasContainer.style.display = 'none';
    nuevaNotaContainer.style.display = 'none';
    calendarioContainer.style.display = 'block'; // Show the calendar container

    // Call the draw function to display the calendar
    draw();
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
        mostrarNotas(mainNotasList.getCountries());
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
