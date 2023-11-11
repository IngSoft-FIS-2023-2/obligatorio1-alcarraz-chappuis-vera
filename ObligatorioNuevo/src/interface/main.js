
import { NotasList } from "../domain/notasList.js";
import { Notas } from "../domain/notas.js";

const btnAdd = document.getElementById('btn-add');
const inpName = document.getElementById('inp-titulo');
const inpDescripcion = document.getElementById('inp-descripcion');

const mainNotasList = new NotasList();

btnAdd.addEventListener('click', () => {
  const newNota = new Notas(inpName.value);
  const countriesErrorContainer = document.getElementById("add-countries-error");
  const countriesError = document.getElementById("add-countries-error-msg");
  
  newNota.setTexto(inpDescripcion.value);
  try
  {
    mainNotasList.add(newNota);
    clearInputs();
    countriesErrorContainer.classList.add("d-none");
    loadNoteList(newNota);
  }
  catch (error)
  {
    countriesErrorContainer.classList.remove("d-none");
    countriesError.innerText = error;
  }
});

function clearInputs() {
  inpName.value = "";
  inpDescripcion.value = "";
}
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function loadNoteList(newNote) {
  const notasContainer = document.getElementById("notas");
  const emptyList = document.getElementById("empty-list");

  emptyList.classList.add('d-none');
  notasContainer.classList.remove("d-none");

  let card = document.createElement("div");
  card.classList.add("card", "text-white", "mb-3");
  card.style.maxWidth = "18rem";
  card.style.backgroundColor = getRandomColor();

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerText = "Nota";

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = newNote.getTitulo();

  let cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = newNote.getTexto();

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);

  document.getElementById("notas-list").appendChild(card);
}


