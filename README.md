# my-app-segura


Diseño de una aplicación web que simula un calendario con posibilidad de crear notas, modificarlas y eliminarlas:

- Gestión de usuarios. Se realiza por medio de una autenticación delegada en Google.
- Control de acceso: Existen dos roles de usuario. administrador y usuario.
- La aplicación cuenta con una API JSON con los siguientes endpoints:
	/api/session/info
	
	/api/user/api/user/get-all
	/api/user/login
	/api/user/modify-role
	/api/user/delete
		
	/api/notes/get-all-my-notes
	/api/notes/create
	/api/notes/delete
	/api/notes/get-all-notes
	/api/notes/modify


Requisitos adicionales completados:
La aplicación cuenta con un front-end que consume la API:
En primer lugar, al acceder a la aplicación aparece la página de Google para comenzar con el OAUTH2. Una vez iniciado sesión, se añade la funcionalidad de logout:

 
-Botón de logout, que cierra sesión, elimina la cookie y redirige al login:
 
-Pulsando el botón de login, se redirige a la página de Google para comenzar la autenticación delegada de nuevo.
A continuación, se explican las funciones del calendario, accesibles únicamente para el rol de usuario (el rol de administrador no tiene desarrollada parte front, más que una ventana dummy ☹):
 
-Las fechas señaladas en naranja corresponden a la fecha en que se ha programado una nota/tarea.
 
-Las tareas aparecen en la tabla ordenadas ascendentemente por fecha. 
-Las filas marcadas en rojo corresponden a una nota o evento anterior a la fecha actual.
 
-Pulsando el botón de Crear Nota, se puede planificar una nueva tarea. 
 
- Pulsando el icono del “lápiz” en la tabla se puede modificar los valores de un evento.
 
-Pulsando en el icono de “papelera” aparece un mensaje de confirmación.
