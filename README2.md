| Identificacion   |
|:------------:|
| Fundamentos de ingenieria en software      |
| M4D- Docentes: Alejandro Adorjan, Jhonny Kidd      |
| Agustin Alcarraz, Maria Victoria Chappuis, Serena Vera    |
| Noviembre 2023 |
| https://github.com/IngSoft-FIS-2023-2/obligatorio1-alcarraz-chappuis-vera.git |


# Proyecto: Desarrollo de app TDAH

## Construcción
deberia haber al menos 1 parrafo con c/u de estos conceptos, 
principales funcionalidades de la aplicacion, cuales son, que es lo que estamos resolviendo? elegimos este caso de uso,, justificar porque elejimmos c/u
que tecnologias usamos(visual studio code), 


Agregar Nota: Cuando el usuario accede a la sección de notas a través del menú en la parte inferior de la pantalla, puede agregar una nueva nota al presionar el botón con el icono de "más". Al hacerlo, se despliega un formulario que incluye campos para el título, el color deseado para la nota (con colores predefinidos por nosotros) y una sección de descripción. La entrada de datos es obligatoria en todos los campos para que la nota sea registrada correctamente.

Mostrar Nota: Al seleccionar el icono de "mostrar notas" en el footer, el sistema exhibirá todas las notas con los colores asignados por el usuario. La presentación de las notas se realiza en una disposición de grilla, y si el usuario registra más de tres notas, estas se mostrarán en filas subsiguientes.

Borrar Nota: En la sección de visualización de notas, cada una de ellas presenta un icono de "basura". Al hacer clic en este icono, la nota correspondiente se eliminará tanto del sistema como de la vista del usuario.

Mostrar Calendario: Al presionar el icono de "calendario" en el footer, se desplegará un calendario sin funcionalidad adicional.

## Documentación del uso de librerías externas

- Uso de librerías externas: 6

## Interfaz de usuario
 GIF SOBRE EL PROYECTO, 

- Interfaz de usuario web / mobile (responsive)
- Pagina unica con navegacion entre secciones
- Aplicar un sistema de dise;o y principios de usabilidad.
- estandard WACG
- Buenas prácticas de implementación de frontend
- Aplicar un sistema de diseño y principios de usabilidad
- Hicimos un gran esfuerzo en seguir el estilo definido previamente en la especificacion



Nuestro proyecto se centra en el desarrollo de un calendario destinado a usuarios con Trastorno por Déficit de Atención e Hiperactividad (ADHD). A través de la investigación llevada a cabo para la primera fase del proyecto obligatorio, hemos llegado a la conclusión de que la interfaz de usuario debe ser diseñada con la máxima simplicidad posible.

Es crucial tener en cuenta que, aunque los colores desempeñan un papel importante para este grupo demográfico, debemos ejercer moderación en su aplicación. La saturación excesiva de colores podría generar distracciones fácilmente para las personas con ADHD. Por ende, nuestra estrategia se enfoca en utilizar colores de manera discernida y limitada, manteniendo un equilibrio que permita una experiencia visual amigable y enfocada.

Adicionalmente, reconocemos la importancia de la concisión en el contenido textual. Con el objetivo de optimizar la accesibilidad y la comprensión, nos esforzamos por presentar información de manera clara y directa, evitando la superabundancia de texto que pueda resultar abrumadora para nuestro público objetivo. La simplicidad y la claridad son pilares fundamentales en el diseño de la interfaz y la presentación de información en nuestro calendario para adolescentes con ADHD.

## Codificación


- IDE Visual Studio Code: configuración común del equipo
- Estándares de codificación (HTML, CSS, JavaScript): Google style

- Buenas prácticas de OOP: separación de lógica e interfaz
Nuestro obligatorio esta dividido por secciones, dentro de la carpeta src(source), esta la carpeta domain (dominio), en donde tenemos las clases utilizadas, como tambien sus respectivas pruebas en la carpeta test. 
- Análisis estático de código: mostrar reducción de problemas: 6
- - Estándar de accesibilidad WCAG: 6

## Test unitario
EJEMPLO DE UNO DE LOS TEST, VER CUAL ES EL PRINCIPAL
Tenemos dos Test cruciales sobre nuestro proyecto: el Crear Nota y Agregar Nota
   
   CREAR NOTA
   test ("Nota valida Roja", () =>{
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Rojo");
        expect(nota.getColor()).toBe('#FF0000'); 
        expect(nota.isValid()).toBe(true);
    });

    AGREGAR NOTA
       test ("Añadir una nota a la lista", () =>{
        let listaDeNotas = new NotasList();
        let nota = new Notas("Este es mi titulo");
        nota.setTexto("Este es mi texto");
        nota.setColor("Verde"); 
        listaDeNotas.add(nota);
        let expectedLength = 1;
        expect(listaDeNotas.getNotasList().length).toBe(expectedLength);
    });


Mediante Jest, realizamos las pruebas sobre las siguientes clases: Notas y NotasList. Las cuales muestran el 100 % de cobertura en cada una de ellas.


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
Agustin: al no poder realizar el obligatorio desde 0 ya que no funcionaba bien el JS decidi tomar lo que ya teniamos que funcionaba (el HTML y CSS) y lo adapte al ejemplo que vimos en clase. Tambien hice toda la funcionalidad del agregar nota y mostrar nota. Para poder realizar todo esto, tuve que ver lo como estaba hecho el ejemplo para tomarlo como guia, como tambien tuve que buscar por mi cuenta por internet. Por ejemplo como se recorre la lista de notas y también como crear una nota, la cual saque de Bootstrap, a través de un evento "click".

- reflexion personal e individual.
- Detalle del trabajo individual
- Técnicas aplicadas y aprendizajes: 2
