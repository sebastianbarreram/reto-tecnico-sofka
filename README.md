# Solución propuesta por Sebastian Barrera Marín

Se realizó una aplicación web para el juego de preguntas. Se utiliza MongoDB Atlas para almacenar la base de datos de preguntas y el historial de partidas. La base de datos ya está configurada y desplegada en Heroku, por lo que la carpeta backend sólo es para su revisión y no se  debe hacer ningún paso adicional para el buen funcionamiento de la aplicación. En el frontend se tiene una opción de CONFIGURACIÓN en la que se pueden visualizar la cantidad de preguntas por cada categoría en la tabla de la derecha, y se tiene un formulario que permite agregar más preguntas.

Para iniciar el juego se debe indicar primero el nombre del usuario y luego dar clic sobre el botón INICIAR.
Para vizualizar el nombre y el puntaje de los usuarios que han participado debe dar clic en el botón HISTORIAL DE USUARIOS.
Para dar respuesta a cada pregunta se debe seleccionar una única respuesta y luego dar clic en el botón ACEPTAR para validar así su repuesta.
Puede salir del juego cuando desee presionando el botón SALIR sin perder el acumulado de puntos.


## Backend
Se pueden verificar los datos almacenados en los siguentes enlaces:

-Para consultar las preguntas:
https://backend-retosofkau.herokuapp.com/question/listarPreguntas

-Para consultar el historial de usuarios:
https://backend-retosofkau.herokuapp.com/user/listarUsuarios

## Frontend Setup

$ git clone https://github.com/sebastianbarreram/reto-tecnico-sofka.git

$ cd .\frontend\

$ npm install

## Frontend Run

$ npm start


