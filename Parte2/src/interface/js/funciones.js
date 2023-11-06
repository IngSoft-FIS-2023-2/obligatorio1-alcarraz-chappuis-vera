
function saveNote() {
    let formulario = document.getElementById("formularioNota");
    if (formulario.reportValidity()) {
        let titulo = document.getElementById("tituloNuevaNota").value;
        let texto = document.getElementById("textAreaNota").value;

        let unaNota = new Nota(titulo, texto);
        Sistema.agregarNota(unaNota); //falta hacer esta funcion
        formulario.reset();
        cargarNotas(); //falta hacer esta funcion
    } else {
        alert("LLenar todos los campos");
    }
}

function cargarNotas() {
//ir actualizando la tabla en el html

}
