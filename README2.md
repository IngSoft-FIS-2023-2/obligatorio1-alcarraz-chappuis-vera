
Identificacion
Fundamentos de ingenieria en software
M4D- Docentes: Alejandro Adorjan, Jhonny Kidd
Agustin Alcarraz, Maria Victoria Chappuis, Serena Vera
Noviembre 2023
https://github.com/IngSoft-FIS-2023-2/obligatorio1-alcarraz-chappuis-vera.git



# Proyecto: Desarrollo de app TDAH

## Construcción
deberia haber al menos 1 parrafo con c/u de estos conceptos, 
principales funcionalidades de la aplicacion, cuales son, que es lo que estamos resolviendo? elegimos este caso de uso,, justificar porque elejimmos c/u
que tecnologias usamos(visual studio code), 

Las funciones principales de nuestra aplicación son: 

- Agregar Nota: cuando el usuario va a la sección de notas mediante el menú en la parte inferior de la pantalla, presiona el botón con un icono de "mas", de modo que le aparece el formulario en el cual hay una sección de título, el color en que desea ver su nota (los colores están limitados por nosotros) y una de descripción. Para que se pueda ingresar correctamente, el usuario debe completar todos los campos. 
- Mostrar Nota: cuando el usuario presiona en el footer el icono de mostrar notas, el sistema deberá mostrar todas las notas con los colores asignados por el usuario. Designamos que la disposición en que mostramos las notas es una grilla la cual, si el usuario ingresa más de tres notas, se muestra en la siguiente fila.
- Borrar nota: en la sección en donde se pueden ver las notas, en cada una de ellas hay un icono de "basura", el cual si el usuario presiona, se elimina esa nota, tanto del sistema como también a la vista del usuario.

-Mostrar Calendario: si presionamos en el footer "calendario", se mostrara un calendario, sin funcionalidad.

## Documentación del uso de librerías externas

- Uso de librerías externas: 6

## Interfaz de usuario

- Interfaz de usuario web / mobile (responsive)
- Pagina unica con navegacion entre secciones
- Aplicar un sistema de dise;o y principios de usabilidad.
- estandard WACG
- Buenas prácticas de implementación de frontend
- Aplicar un sistema de diseño y principios de usabilidad
- Hicimos un gran esfuerzo en seguir el estilo definido previamente en la especificacion



Nuestro proyecto se trata sobre un calendario para gente con ADHD y nos dimos cuenta de que gracias a la investigación realizada para la primera entrega del obligatorio, la interfaz de usuario debe ser lo más sencilla posible. Por ejemplo, los colores para ellos son importantes, sin embargo, tampoco podemos "inundar" la página a colores porque se van a distraer fácilmente. A su vez, tenemos que ser lo más conciso posible en lo que se respecta al texto.

## Codificación

- IDE Visual Studio Code: configuración común del equipo
- Estándares de codificación (HTML, CSS, JavaScript): Google style
- Buenas prácticas de OOP: separación de lógica e interfaz
- Análisis estático de código: mostrar reducción de problemas: 6
- - Estándar de accesibilidad WCAG: 6

## Test unitario

- Test unitarios en Jest
- 100% cobertura en clases de dominio: 6

## Test de sistema

- Realizar test de sistema (se asigna otro proyecto)
- Definición de ambientes de testing
- Generar casos de prueba con técnicas de caja negra
- Detallar sesiones de prueba exploratoria: 3

## Reporte de issues

Explicar como reportamos los issues al otro equipo

## Informe de calidad del sistema

- Sumarizar número de issues reportados por tipo
- Realizar una evaluación global de la calidad: 3

## Reflexión
Agustin: al no poder realizar el obligatorio desde 0 ya que no funcionaba bien el JS decidi tomar lo que ya teniamos que funcionaba (el HTML y CSS) y lo adapte al ejemplo que vimos en clase. Tambien hice toda la funcionalidad del agregar nota y mostrar nota.
reflexion personal e individual. Para poder realizar todo esto, tuve que ver lo como estaba hecho el ejemplo para tomarlo como guia, como tambien tuve que buscar por mi cuenta por internet. Por ejemplo como se recorre la lista de notas y también como crear una nota, la cual saque de Bootstrap, a través de un evento "click"

- Detalle del trabajo individual
- Técnicas aplicadas y aprendizajes: 2
