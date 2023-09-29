M4A - Docentes: Alejandro  Adorjan
- Agustin Alcarraz 281644
- Victoria Chappuis 278311
- Serena Vera 267108

# Fundamentos de Ingeniería en Software
## Repositorio
Creamos un repositorio en GitHub, en el cual vamos a subir todo nuestro trabajo a este repositorio remoto, utilizando los comandos dados en clase. En él está el Readme.md en el cual está todo el trabajo del obligatorio. A su vez, están presentes las carpetas "casosDeUso" en donde tiene las imágenes correspondientes a los perfiles que consideramos adecuados para nuestra aplicación.
## Versionado:
El obligatorio cuenta con dos ramas, una la **dev**, en la cual subimos todos nuestros avances con el objetivo de tener un cuerpo claro del obligatorio, para luego hacer un merge con la rama **main** cuando lleguemos a una versión completa.


# ELICITACIÓN

## Entrevista
Llevamos a cabo una entrevista con Laura Fazacas, técnica de estudio especializada en dificultades de aprendizaje. 
Su trabajo diario consiste en ayudar con tareas diarias a estudiantes de todas las edades con dificultades de aprendizaje, diagnosticadas o no, como pueden ser Dislexia, Disgrafía, Discalculia, Discapacidad de la memoria y el procesamiento auditivo, Trastorno por déficit de atención e hiperactividad (TDHA), Trastorno del espectro autista/Trastorno generalizado del desarrollo, entre otros.

En aspectos generales, comenzamos hablando de nuestros objetivos y a quienes estaba dirigido el proyecto, que es el TDHA, que tipos de TDHA existen, cómo podemos ayudarlos en su dia a dia, que problemas suelen tener las personas que trata y qué estrategias usa ella para ayudarlos.
Luego pasamos a hablar sobre como ella desarrollaría el planner ideal para un adolecente con TDHA, que factores son clave, que cosas debemos cuidar y que deberíamos evitar.

### Conclusiones de la entrevista
- El TDAH tiene varios tipos, y las personas con TDAH suelen padecer de otros trastornos mencionados anteriormente.
- Es imposible cubrir todas las necesidades o hacer un planner ideal para todos porque no todos tienen las mismas dificultades.
- Las técnicas organizacionales que se enseñan a las personas con TDAH le pueden servir a cualquiera.


Nos brindó consejos para tratar y generar recursos para personas con TDAH, estos son:
- Otorgar tiempo adicional tanto en su trabajo diario como en las evaluaciones. El tiempo que demanda procesar información es mayor.
- **Estimular y apoyar la organización** de todas sus tareas. Se ven beneficiados por la **anticipación**. Saber que viene siguiente, cuales son los eventos del día, etc.
- Presentar **instrucciones pautadas** para las tareas, el espacio gráfico suficiente para desarrollarla, escribir lo que sea necesario y a continuación la siguiente propuesta.
- Permitirle **descanso entre tareas** y cierto tiempo para que se "mueva" y retome la tarea.
- Es difícil para ellos anticipar cuánto tiempo les lleva prepararse y conmutar para atender ciertos eventos. Debemos recordarles antes de este tiempo, y darles instrucciones **claras y concisas** de cómo prepararse, como llegar, qué ómnibus, etc.
- Evitar cualquier elemento que pueda generar confusiones/desentendimientos: Simplificar enunciados, utilizar lenguaje claro y directo, reducir cantidad de preguntas, evitar letras con serifas, Escribir ciertos elementos clave en mayúsculas es de gran ayuda y utilizar colores fácilmente distinguibles.
- Tener siempre en cuenta que los _"elementos distractores"_ pueden ser perjudiciales para su desempeño.
- deben poder visualizar su semana y a la vez tener sus tareas del día y sus horarios todos en un mismo lugar
- La visualización es una estrategía clave, los gráficos los ayudan a **visualizar** la información y procesarla más eficientemente.
- Las tareas diarias y el visualizador semanal debe ser lo primero que vean, de lo contrario genera distorsiones.
- Las tareas completadas deben ser desechadas o tachadas para generar un estímulo positivo además de una mejor representación visual de las tareas próximas.
- Puede servirles iconizar ciertas tareas si lo desean.
- Es importante que sus acciones tengan un **feedback positivo** y no hacerlos sentir mal en caso de que no hayan llegado a cumplir con ciertos estándares. Algún tipo de premio siempre es bueno.
- La Técnica Pomodoro es un método para concentrarse probado muy eficiente para ellos.
- La app debe tener la posibilidad de imprimir el planner de la semana, a muchos de sus estudiantes les gusta tener su planner en la heladera, escritorio, cuarto, tenerlo en muchos lugares y muchas copias genera más instancias de recordatorios.
- Muchos toman pastillas para la concentración: recordatorio de tomar las pastillas y marcar las horas de concentración.
- Es difícil aprenderse información clave como número de cédula de identidad, número de teléfono de contactos importantes, dirección de casa , etc.


(No quiero poner porque es muy directo):
- Necesitan un lugar para poder tomar notas, hacer checklists, etc.

## INGENIERIA INVERSA
Investigamos y evaluamos dos apps para daily planning: Tiimo y Notion. Nos enfocamos en desglosar sus características clave, prestando especial atención en la interfaz de usuario y diseño. Buscamos patrones de diseño efectivos y mejores prácticas que podamos incorporar en nuestra propia aplicación.
¿Por qué elegimos estas dos y no otras? Notion es la más usada por estudiantes y Tiimo tiene como objetivo ser un planner más que nada visual hecho para personas con TDAH.


 ### Tiimo
Features principales:
- Al empezar te pregunta si SOS un pensador visual neurodivergente, esto permite que la app se orgnize de distintas maneras y da recomendaciones según las necesidades del perfil definido. También pregunta para qué quieres usar la app, ofrece opciones como: tareas del hogar, estudio, trabajo, etc.
- Elegir objetivos para que nos ayude, estos pueden ser: estrés, ansiedad, querer estructurar nuestras rutinas mejor, mejorar la concentración, entre otras.
- Nos permite crear un reminder para revisar los planes del día cada mañana y editarlos, también nos ofrece una revisión para la noche con el objetivo de revisar las tareas pendientes.
- Recordatorios diarios de ciertas tareas están disponibles
- Cuando se agrega una tarea, se le asigna un color y una representación visual. Además, se pueden establecer horarios y duraciones específicas para cada tarea, incluyendo un horario de inicio y finalización. Se brindan opciones flexibles, permitiendo establecer la duración de la tarea en cualquier momento del día o para toda la jornada. También se pueden programar repeticiones diarias, de lunes a viernes o mensuales, según sea necesario.
- En la página principal se presenta una visualización de nuestra semana con las actividades planificadas para cada día y un área con un _checklist_ de las actividades de hoy.
- Posee una sección de notas para agregar información adicional.
- En una de las pestañas se muestra la tarea que debería estar sucediendo en tiempo real, indicando la hora actual, de qué hora a qué hora es y cuánto tiempo restante para terminar la tarea, excelente para visualizar nuestro tiempo. Esto brinda una experiencia visual completa para el usuario y permite visualizar y esquematizar nuestro tiempo


### Notion
Notion es una aplicación de gestión que se adapta a una amplia variedad de necesidades. Su funcionamiento se basa en la creación de “carpetas” o “bases” que pueden contener una variedad de elementos como texto, listas de tareas, tablas, bases de datos, archivos adjuntos, y más. Estas bases tienen una estructura jerárquica, que permite organizar las páginas de manera estructurada, a modo de tener páginas principales y subpáginas dentro de ellas.
 
### Funcionamiento de Notion:
 
1. Creación de páginas: Los usuarios pueden crear páginas en blanco o elegir entre plantillas predefinidas para diferentes tipos de contenido, como notas, tareas, calendarios, entre otros.
 
2. Personalización: Cada página es altamente personalizable. Los usuarios pueden agregar texto, listas de tareas, imágenes, enlaces, y más, para adaptarla a sus necesidades específicas.
 
3. Organización: Las páginas se organizan en bases o carpetas, lo que facilita la estructuración de la información. Además, se pueden utilizar etiquetas y filtros para categorizar y buscar contenido rápidamente.
 
4. Colaboración: Notion permite la colaboración en tiempo real, lo que facilita el trabajo en equipo. Los usuarios pueden comentar en las páginas, asignar tareas y compartir documentos con otros usuarios.
 
### Dificultades para personas con déficit de atención:
 
1. Complejidad visual: Notion ofrece muchas opciones de formato y personalización, lo que puede resultar abrumador para personas con déficit de atención. Puede ser útil proporcionar una configuración simplificada o plantillas específicas para evitar distracciones visuales innecesarias.
 
2. Organización: Aunque la organización es una de las fortalezas de Notion, algunas personas con déficit de atención pueden encontrar desafíos para mantener una estructura coherente. Se recomienda proporcionar orientación y plantillas predefinidas para ayudar en este aspecto.
 
3. Fácil distracción: Notion es una herramienta flexible con muchas funciones, lo que podría llevar a distracciones si no se usa con un propósito específico. Se debe fomentar el enfoque en tareas concretas y proporcionar recordatorios visuales para mantenerse en el camino.
 
4. Gestión del tiempo: Las funciones de gestión del tiempo, como los calendarios y las fechas de vencimiento de tareas, son útiles, pero las personas con déficit de atención pueden necesitar recordatorios adicionales y alertas para seguir un horario.
 
En resumen, Notion es una poderosa herramienta de organización e información, pero para las personas con déficit de atención, puede requerir una adaptación cuidadosa para evitar distracciones y garantizar una experiencia más enfocada y productiva. Esto se puede lograr mediante la simplificación de la interfaz, la orientación clara y la implementación de recordatorios visuales. PUEDE IR EN CONCLUSIONES
 
## Conclusiones de la ingenieria inversa:

## OBSERVACION

## Modelado de usuarios del Sistema
Esta aplicacion esta dise;ada enfocada a personas con tdah sin embargo muchas personas elijen usar este tipo de metodos, por lo tanto tambien vamos a agregarlos a nuestro publico

![Alt text](image-1.png)

![Alt text](image.png)





[template de user personas2]

## ESPECIFICACIÓN
## Requirimientos Funcionales
###  Rf1: Ingreso y actualización de tareas 
Actor: usuario
Descripción: el usuario debe poder tanto ingresar y actualizar el estado de las tareas(en proceso, 	finalizado) tareas en su planner
Prioridad: alta


### Rf2: Sistema de puntos:
Actor : usuario
Descripción: el sistema deberá brindar, los puntos correspondientes de acuerdo a la racha de tareas completadas
Prioridad: alta
	
### Rf3: Mascota
Actor: Sistema 
Descripción: la mascota deberá cambiar su estado de ánimo de acuerdo al puntaje promedio del dia 
Prioridad: media

### Rf4: Estadísticas
Actor: Sistema
Descripcion: el sistema debera mostrar en pantalla el porcentaje de tareas completadas en el día
Prioridad: alta
 
### Rf5: Visualización de todas las tareas:
Actor: Sistema
Descripcion: el sistema tiene que mostrar todas las tareas del dia
Prioridad: alta

### Rf6: Notas
Actor: usuario
Descripcion: el usuario podra tener la opcion de poder escribir notas rapidas
Prioridad baja

### Rf7: Agregacion de alarmas
Actor: usuario
Descripción: el usuario deberá poder agregar recordatorios, de modo que se le active una alarma.
Prioridad alta

## Requerimientos no Funcionales

### Rnf1: Sistema de compatibilidad
Descripción: el planner deberá soportar celulares con sistema operativo: Android 10 o IOS 13 o sus versiones superiores

### Rnf2: Idiomas soportados
Descripción: la aplicación deberá ser desarrollada principalmente en español e inglés

### Rnf3 Validación de la aplicación
Descripción: para poder subir la aplicación tanto para la Play Store de android como en la App Store de IOS, deberá cumplir con los standards de dichas tiendas 

### Rnf4: Interfaz y logica
Descripción: la interfaz del planner sera en XXX y la logica en XXX


## HISTORIAS DE USUARIO
## Historias de usuario 1
## Historias de usuario 2

## CASOS DE USO
## Caso de uso 1
título
actor
curso normal
curso alternativo
## Caso de uso 2

## VALIDACION Y VERIFICACION
## REFLEXIÓN


## Objetivos: 
Hacer una planner que se adapte a las necesidades de cada uno, principalmente para personas con déficit atencional
## Descripción contexto: 
planner altamente customizable para TDAH, enfocado en poder organizar su día tener un dia eficiente, con un método de puntos (como para que no lo dejen colgado, se enganchen con ambición, racha, competencias) que se puedan marcar objetivos, que puedan agregar sus hábitos y metas diarias. puede adaptarse al mood de cada uno


 























## preguntas para la entrevista:
que es el adhd
que dificultades presenta en el dia a dia una persona con adhd
como trabajas tu con gente con adhd
como responden al estimulo la gente con adhd? estimulo positivo? negativo? ambos?
cuales son buenas practicas para tratar con gente con adhd?
que recursos usas para tratar con esta gente?
g
