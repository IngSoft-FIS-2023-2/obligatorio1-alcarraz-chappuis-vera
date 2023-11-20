
import { NotasList } from "../domain/notasList.js";
import { Notas } from "../domain/notas.js";

const btnAdd = document.getElementById('btn-add');
const inpName = document.getElementById('inp-titulo');
const inpDescripcion = document.getElementById('inp-descripcion');
const inpColor = document.getElementById('inp-color');

const mainNotasList = new NotasList();

btnAdd.addEventListener('click', () => {
  const newNota = new Notas(inpName.value);
  const notasErrorContainer = document.getElementById("add-notas-error");
  const notasError = document.getElementById("add-notas-error-msg");
  
  newNota.setTexto(inpDescripcion.value);
  newNota.setColor(inpColor.value);
  try
  {
    mainNotasList.add(newNota);
    clearInputs();
    notasErrorContainer.classList.add("d-none");
    loadNoteList(newNota);
  }
  catch (error)
  {
    notasErrorContainer.classList.remove("d-none");
    notasError.innerText = error;
  }
});

function clearInputs() {
  inpName.value = "";
  inpDescripcion.value = "";
}

function loadNoteList() {
  const notasContainer = document.getElementById("notas");
  const emptyList = document.getElementById("empty-list");
  const notasList = document.getElementById("notas-list");

  notasList.innerHTML = "";

  if (mainNotasList.getNotasList().length === 0) {
    emptyList.classList.remove('d-none');
    notasContainer.classList.add("d-none");
    return;
  }

  emptyList.classList.add('d-none');
  notasContainer.classList.remove("d-none");

  // Crear un nuevo contenedor de fila si no existe uno o si la última fila está llena
  if (notasList.children.length === 0 || notasList.lastElementChild.children.length === 3) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row");
    notasList.appendChild(rowContainer);
  }

  // Obtener la fila actual
  const rowContainer = notasList.lastElementChild;

  // Iterar sobre todas las notas
  mainNotasList.getNotasList().forEach(newNote => {
    // Crear una nueva columna si la fila actual está llena
    if (rowContainer.children.length === 3) {
      const newRowContainer = document.createElement("div");
      newRowContainer.classList.add("row");
      notasList.appendChild(newRowContainer);
    }

    // Obtener la columna actual
    const colContainer = document.createElement("div");
    colContainer.classList.add("col-sm-4"); 
    rowContainer.appendChild(colContainer);

    let card = document.createElement("div");
    card.classList.add("card", "text-white", "mb-3");
    card.style.maxWidth = "18rem";
    card.style.backgroundColor = newNote.getColor();
    card.style.marginLeft = "7%";

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header", "d-flex", "justify-content-between", "align-items-center");

    let cardHeaderText = document.createElement("span");
    cardHeaderText.innerText = "Nota";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    cardTitle.innerText = newNote.getTitulo();

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = newNote.getTexto();

    let deleteIcon = document.createElement("span");
    deleteIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
      </svg>
    `;
    deleteIcon.style.cursor = "pointer";
    deleteIcon.classList.add("cursor-pointer");

    deleteIcon.addEventListener("click", () => {
      deleteNote(newNote.getTitulo(), newNote.getTexto());
    });

    cardHeader.appendChild(cardHeaderText);
    cardHeader.appendChild(deleteIcon);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    colContainer.appendChild(card);
  });
}




function deleteNote(titulo, descripcion) {
  const updatedNotes = mainNotasList.deleteNoteByTitleAndDescription(titulo, descripcion);
  loadNoteList(updatedNotes);
}

document.getElementById('nav-calendar-tab').addEventListener('click', function() {
  var calendario = document.getElementById('nav-calendar');
  var notas = document.getElementById('nav-add-nota'); 
  var listaNotas = document.getElementById('nav-notas-list'); 
  notas.classList.add('d-none');
  listaNotas.classList.add('d-none');
  calendario.classList.remove('d-none');

});

document.getElementById('nav-add-nota-tab').addEventListener('click', function() {
  var calendario = document.getElementById('nav-calendar');
  var notas = document.getElementById('nav-add-nota'); 
  var listaNotas = document.getElementById('nav-notas-list'); 
  calendario.classList.add('d-none');
  listaNotas.classList.add('d-none');
  notas.classList.remove('d-none');
});

document.getElementById('nav-notas-list-tab').addEventListener('click', function() {
  var calendario = document.getElementById('nav-calendar');
  var notas = document.getElementById('nav-add-nota'); 
  var listaNotas = document.getElementById('nav-notas-list'); 
  calendario.classList.add('d-none');
  notas.classList.add('d-none');
  listaNotas.classList.remove('d-none');
});



