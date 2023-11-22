# Informe de testing 
Proyecto asignado: [https://github.com/IngSoft-FIS-2023-2/obligatorio1-brum-heguilein.git]

## Test de sistema
Sesion 1
Mision: Establecer primer contacto con la app

Entorno: Windows 11 Opera GX
Duracion: Inicio : 22/11/2023 2:30
Final: 22/11/2023 2:55

Notas:

Al presionar el botón "Confirmar" sin completar los campos, se genera una alerta (mediante un console.log) indicando que cada campo no puede estar vacío. Sin embargo, no se realiza una validación para verificar que el año sea un número. Por otro lado, la interfaz del segundo campo resulta confusa, ya que si no se recibe la alerta "Ingresar Primero o Segundo", no se especifica qué información debe introducirse. En este caso, sería más claro reemplazar este campo por un menú desplegable (select), al igual que con los campos de los meses. Además, no se efectúa una validación para asegurar que los meses ingresados sean válidos.

En cuanto al botón "Cancelar", al presionarlo, se observa que todos los datos son eliminados, lo cual podría generar pérdida de información no deseada.

Por último, al ingresar el semestre, este luego aparece en la sección de "Eliminar Semestre". Sin embargo, al seleccionar el semestre, se permite eliminarlo tanto del HTML como del sistema sin una confirmación adicional, lo cual podría resultar en la eliminación accidental de datos importantes. Sería recomendable incorporar una confirmación antes de proceder con la eliminación del semestre.

A su vez valida, que el semestre no este repetido.

Defectos:

BUG-01

Cuando ingresas por primera vez un semestre se agranda el formulario y siempre que agregues uno, se desplaza un poco hacia abajo.


## Reporte de issues

## Informe de calidad del sistema

En el main.js

En general, el código parece ser bastante claro y fácil de entender, lo cual es positivo. Además, está bien estructurado y utiliza nombres de variables y funciones descriptivos, lo que facilita la comprensión del propósito de cada parte del código. Algunas observaciones y sugerencias específicas incluyen:

Consistencia en el Uso de Punto y Coma:
Aunque no es un problema crítico, se observa inconsistencia en el uso de punto y coma al final de las declaraciones. Puedes considerar ser consistente, ya sea agregándolos en todas partes o eliminándolos por completo. Esto es más una cuestión de estilo, pero la consistencia mejora la legibilidad.

Declaración de Variables:
Las variables están bien declaradas, pero podrían considerar utilizar const en lugar de let siempre que sea posible, para indicar que las variables no serán reasignadas. 

Comentarios:
Los comentarios proporcionados son útiles, pero podrían agregar comentarios adicionales para explicar partes más complejas o para proporcionar información sobre el propósito general del archivo.

Separación de Responsabilidades:
El código podría beneficiarse de una mayor separación de responsabilidades. Por ejemplo, podrías considerar dividir la lógica relacionada con la interfaz de usuario y la lógica de negocio en módulos o clases separadas para mejorar la modularidad y la mantenibilidad.


En el listaSemestre.js y Semestre.js

El código en ListaSemestre.js es robusto y sigue buenas prácticas. La utilización de una clase para representar una lista de semestres es una elección clara y organizada. La gestión de excepciones en el método add es adecuada, aunque podría mejorarse para proporcionar mensajes de error más amigables al usuario. La estructura global es fácil de entender, lo que facilita la lectura y el mantenimiento.

El código en Semestre.js demuestra una buena calidad. La clase Semestre está bien estructurada, utiliza propiedades privadas de manera apropiada y ofrece métodos útiles para obtener y establecer valores. La implementación del método valido es sólida, asegurando que los valores sean válidos. Sin embargo, como vimos en el listaSemestre.js,se puede mejorar la experiencia del usuario en lo que se refiere al manejo de errores. En general, el código es claro y sigue buenas prácticas de programación orientada a objetos.


Sí, la indentación en ambos códigos (ListaSemestre.js y Semestre.js) es correcta y consistente. La estructura del código está claramente organizada con espacios y sangrías adecuadas, lo que mejora significativamente la legibilidad del código.

El uso adecuado de la indentación contribuye en gran medida a la comprensión del código y facilita la identificación de bloques de código anidados. En resumen, en ambos archivos, la indentación es un aspecto positivo que contribuye a la calidad general del código.

## Reflexión
