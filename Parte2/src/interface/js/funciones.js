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



