# my-app-segura


Diseño de una aplicación web que simula un calendario con posibilidad de crear notas, modificarlas y eliminarlas:

- Gestión de usuarios. Se realiza por medio de una autenticación delegada en Google.
- Control de acceso: Existen dos roles de usuario. administrador y usuario.
- La aplicación cuenta con una API JSON con los siguientes endpoints:
	/api/session/info
	
	-/api/user/api/user/get-all
	-/api/user/login
	-/api/user/modify-role
	-/api/user/delete
		
	-/api/notes/get-all-my-notes
	-/api/notes/create
	-/api/notes/delete
	-/api/notes/get-all-notes
	-/api/notes/modify


Requisitos adicionales completados:
La aplicación cuenta con un front-end que consume la API
