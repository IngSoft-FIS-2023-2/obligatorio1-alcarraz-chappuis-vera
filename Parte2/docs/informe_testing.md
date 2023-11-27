# Informe de testing 
Proyecto asignado: [https://github.com/IngSoft-FIS-2023-2/obligatorio1-brum-heguilein.git]

## Test de sistema
Recibimos el proyecto de otro grupo y realizamos el testing de su sistema. Usaremos las técnicas de tests exploratorios y probamos sus funcionalidades para encontrar defectos y errores.
Realizamos una sesión de media hora o menos, con un objetivo principal a probar al cual le llamamos misión. Tomamos notas de todo lo relevante surgido en la sesión, tanto referentes a la misión pricipal como no.
Luego extraemos los puntos clave de las notas, redactamos y reportamos en issues.

Utilizamos la técnica de partición equivalente, de modo que separamos las entradas de los campos del formulario en clases de equivalencia y definimos clases válidas, aquellos valores que tienen sentido para sus respectivos campos, en otras palabras: valores numéricos para el año, y los meses escritos en palabras.
Por último, probamos que cada clase se comporte como debería.

## Sesión 1

### Misión: Establecer primer contacto con la app

Entorno: Windows 11 Google Chrome 119.0.6045.160

Duración: Inicio: 22/11/2023 2:30

Final: 22/11/2023 2:55

### Notas:

Al presionar el botón "Confirmar" sin completar los campos, se genera una alerta (mediante un console.log) indicando que cada campo no puede estar vacío. Sin embargo, no se realiza una validación para verificar que el año sea un número. Por otro lado, la interfaz del segundo campo resulta confusa, ya que si no se recibe la alerta "Ingresar Primero o Segundo", no se especifica qué información debe introducirse. En este caso, sería más claro reemplazar este campo por un menú desplegable (select), al igual que con los campos de los meses. Además, no se efectúa una validación para asegurar que los meses ingresados sean válidos. A su vez, valida que el semestre no este repetido. Por último, el título de "Proyecto FIS 2023S2", debería estar centrado con el título de la aplicación.

En cuanto al botón "Cancelar", al presionarlo, se observa que todos los datos son eliminados, lo cual podría generar pérdida de información no deseada.

Por último, al ingresar el semestre, este luego aparece en la sección de "Eliminar Semestre". Al seleccionar el semestre, se permite eliminarlo tanto del HTML como del sistema sin una confirmación adicional, lo cual podría resultar en la eliminación accidental de datos importantes. Sería recomendable incorporar una confirmación antes de proceder con la eliminación del semestre.

### Defectos:

#### BUG-01

Cuando ingresas por primera vez un semestre se agranda el formulario y siempre que agregues uno, se desplaza un poco hacia abajo.

## Reporte de issues

Los bugs o incongruencias detectadas en el ciclo de testing serán reportadas en GitHub, para que los autores puedan eventualmente verlas y solucionarlas. Para hacer esto entramos al repositorio y en la pestaña de "issues", seleccionamos para insertar un nuevo issue.

En reporte incluirá un título descriptivo y un breve texto que explicara la situación, el entorno en el que se dio, y el nivel de severidad. 

También podrá incluir posibles maneras de solucionarlo y fotos que muestren la situación. Ademas incluirá los pasos que se deben seguir para recrear esa situación.

Entonces, estos issues tendrán labels identificadores y estarán abiertos para correciones. Una vez solucionado el bug, el issue se dará por terminado y se cerrará.

No obstante, puede volverse a abrir en caso de que el problema se presente de nuevo.


|Título del issue| Severidad| Prioridad| Categorización del issue| Link al issue
|--------------|--------------|--------------|--------------|--------------
| Validación de Datos | Alta |Alta  | Invalid |https://github.com/IngSoft-FIS-2023-2/obligatorio1-brum-heguilein/issues/3
| Bug en la visualización del formulario al ingresar un semestre  | Baja |Baja | Bug |https://github.com/IngSoft-FIS-2023-2/obligatorio1-brum-heguilein/issues/4



## Informe de calidad del sistema

### En el main.js:

En general, el código parece ser bastante claro y fácil de entender, lo cual es positivo. Además, está bien estructurado y utiliza nombres de variables y funciones descriptivos, lo que facilita la comprensión del propósito de cada parte del código. 

Consistencia en el Uso de Punto y Coma e Identación:

Se observa consistencia en el uso de punto y coma al final de las declaraciones. Por último, la identación del codigo es uniforme.

Comentarios:

Los comentarios proporcionados son útiles ya que dividen el código para el que lo lea entienda que utilidad tienen las variables, como también las funciones.


### En el listaSemestre.js y Semestre.js

El código en ListaSemestre.js es robusto y sigue buenas prácticas. La utilización de una clase para representar una lista de semestres es una elección clara y organizada. La gestión de excepciones en el método add es adecuada, aunque podría mejorarse para proporcionar mensajes de error más amigables al usuario. La estructura global es fácil de entender, lo que facilita la lectura y el mantenimiento.

El código en Semestre.js demuestra una buena calidad. La clase Semestre está bien estructurada, utiliza propiedades privadas de manera apropiada y ofrece métodos útiles para obtener y establecer valores. Sin embargo, como vimos en el listaSemestre.js,se puede mejorar la experiencia del usuario en lo que se refiere al manejo de errores. En general, el código es claro y sigue buenas prácticas de programación orientada a objetos. 

La indentación en ambos códigos (ListaSemestre.js y Semestre.js) es correcta y consistente. La estructura del código está claramente organizada con espacios y sangrías adecuadas, lo que mejora significativamente la legibilidad del código.

El uso adecuado de la indentación contribuye en gran medida a la comprensión del código y facilita la identificación de bloques de código anidados. En resumen, en ambos archivos, la indentación es un aspecto positivo que contribuye a la calidad general del código.


