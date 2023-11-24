# Informe de testing 
Proyecto asignado: [https://github.com/IngSoft-FIS-2023-2/obligatorio1-brum-heguilein.git]

## Test de sistema
Recibimos el proyecto de otro grupo y realizamos el testing de su sistema. Usaremos la técnica de test exploratorio, probamos sus funcionalidades para encontrar defectos y errores.
Realizamos sesiones de media hora o menos, con un objetivo principal a probar al cual le llamamos misión. Tomamos notas de todo lo relevante surgido en la sesión, tanto referentes a la misión pricipal como no.
Luego extraemos los puntos clave de las notas, redactamos y reportamos en issues.

Utilizamos la técnica de partición equivalente, de modo que separamos las entradas de los campos del formulario en clases de equivalencia y definimos clases válidas, aquellos valores que tienen sentido para sus respectivos campos, en otras palabras: valores numéricos para el año, y los meses escritos en palabras.
Por ultimo, probamos que cada clase se comporte como debería.

## Sesion 1

### Mision: Establecer primer contacto con la app

Entorno: Windows 11 Google Chrome 119.0.6045.160
Duración: Inicio : 22/11/2023 2:30
Final: 22/11/2023 2:55

### Notas:

Al presionar el botón "Confirmar" sin completar los campos, se genera una alerta (mediante un console.log) indicando que cada campo no puede estar vacío. Sin embargo, no se realiza una validación para verificar que el año sea un número. Por otro lado, la interfaz del segundo campo resulta confusa, ya que si no se recibe la alerta "Ingresar Primero o Segundo", no se especifica qué información debe introducirse. En este caso, sería más claro reemplazar este campo por un menú desplegable (select), al igual que con los campos de los meses. Además, no se efectúa una validación para asegurar que los meses ingresados sean válidos. A su vez, valida que el semestre no este repetido. Por último, el titulo de "Proyecto FIS 2023S2", deberia estar centrado con el titulo de la aplicacion.

En cuanto al botón "Cancelar", al presionarlo, se observa que todos los datos son eliminados, lo cual podría generar pérdida de información no deseada.

Por último, al ingresar el semestre, este luego aparece en la sección de "Eliminar Semestre". Sin embargo, al seleccionar el semestre, se permite eliminarlo tanto del HTML como del sistema sin una confirmación adicional, lo cual podría resultar en la eliminación accidental de datos importantes. Sería recomendable incorporar una confirmación antes de proceder con la eliminación del semestre.



### Defectos:

BUG-01

Cuando ingresas por primera vez un semestre se agranda el formulario y siempre que agregues uno, se desplaza un poco hacia abajo.


## Reporte de issues

Los bugs o incongruencias detectadas en el ciclo de testing serán reportadas en GitHub, para que los autores puedan eventualmente verlas y solucionarlas. Para hacer esto entramos al repositorio y en la pestaña de "issues", seleccionamos para insertar un nuevo issue.

En reporte incluirá un titulo descriptivo y un breve texto que explicara la situación, el entorno en el que se dio, y el nivel de severidad. 

También podrá incluir posibles maneras de solucionarlo y fotos que muestren la situación. Ademas incluirá los pasos que se deben seguir para recrear esa situación.

Entonces, estos issues tendran labels identificadores y estarán abiertos para correciones. Una vez solucionado el bug, el issue se dará por teminado y se cerrará.
No obstante, puede volverse a abrir en caso de que el problema se presente de nuevo.

Resumen: 
En los campos de "mes", el usuario puede ingresar cualquier cosa, de modo que no esta validando que sea un mes y como consecuencia se lo deja ingresar. A su vez tampoco se esta validando en el campo de "Año" que sea un numero o tampoco están verificando que sea un año correcto (por ejemplo se puede poner 12345).

Plataforma: Google Chrome 119.0.6045.160

Severidad: Alta

Prioridad: Alta

Pasos a Reproducir: Completar todos los datos del formulario y darle al botón de "Confirmar"

Posibles soluciones: Para los meses, en vez de hacer que el usuario ingrese "a mano" el mes, poner un "select" con todos los meses. En lo que respecta al año, limitar al usuario que ingrese solo números y que estos sean mayor o igual a la fecha del sistema.


--------------------
### Resumen: 

Cuando se ingresa una nota, el formulario se desplaza y se hace mas grande, para que se acomode al momento de mostrar el semestre

Plataforma: Google Chrome 119.0.6045.160

Severidad: Baja

Prioridad: Baja

Pasos a Reproducir: Completar todos los datos del formulario y darle al boton de "Confirmar"

Posibles soluciones: En vez de mostrar los semestres en el formulario al agregar el semestre, se podria hacer un menu, separandolo del formulario para no cambie de tamaño y no se desplace hacia abajo.




## Informe de calidad del sistema

En el main.js

En general, el código parece ser bastante claro y fácil de entender, lo cual es positivo. Además, está bien estructurado y utiliza nombres de variables y funciones descriptivos, lo que facilita la comprensión del propósito de cada parte del código. Algunas observaciones y sugerencias específicas incluyen:

Consistencia en el Uso de Punto y Coma:
Se observa consistencia en el uso de punto y coma al final de las declaraciones. 

Comentarios:
Los comentarios proporcionados son útiles.

Separación de Responsabilidades:
El código podría beneficiarse de una mayor separación de responsabilidades. Por ejemplo, podrías considerar dividir la lógica relacionada con la interfaz de usuario y la lógica de negocio en módulos o clases separadas para mejorar la modularidad y la mantenibilidad.


En el listaSemestre.js y Semestre.js

El código en ListaSemestre.js es robusto y sigue buenas prácticas. La utilización de una clase para representar una lista de semestres es una elección clara y organizada. La gestión de excepciones en el método add es adecuada, aunque podría mejorarse para proporcionar mensajes de error más amigables al usuario. La estructura global es fácil de entender, lo que facilita la lectura y el mantenimiento.

El código en Semestre.js demuestra una buena calidad. La clase Semestre está bien estructurada, utiliza propiedades privadas de manera apropiada y ofrece métodos útiles para obtener y establecer valores. La implementación del método valido es sólida, asegurando que los valores sean válidos. Sin embargo, como vimos en el listaSemestre.js,se puede mejorar la experiencia del usuario en lo que se refiere al manejo de errores. En general, el código es claro y sigue buenas prácticas de programación orientada a objetos. 


La indentación en ambos códigos (ListaSemestre.js y Semestre.js) es correcta y consistente. La estructura del código está claramente organizada con espacios y sangrías adecuadas, lo que mejora significativamente la legibilidad del código.

El uso adecuado de la indentación contribuye en gran medida a la comprensión del código y facilita la identificación de bloques de código anidados. En resumen, en ambos archivos, la indentación es un aspecto positivo que contribuye a la calidad general del código.

En cuanto a la aplicacion, consideramos que cumple con lo minimo planteado, ya que no controla practicamente ninguno de los campos, los cuales son el centro del sistema. De modo que esta pierde validez.



## Reflexión
