'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})

const addPrefixToGroup = group => {
  // Grupo para rutas con prefijo /api/
  group.prefix("api");
  return group;
};


addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas sin protección de autenticación aquí
    Route.post("login", "UserController.login");
    Route.post("register", "UserController.register")
  })
);

addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas con protección de autenticación aquí
    Route.get("asignatura", "AsignaturaController.index")
    Route.put('updateAsignatura/:id', 'AsignaturaController.update')

    Route.get('tema', 'TemaController.index')
    Route.post('tema', 'TemaController.store')
    Route.put('tema/:id', 'TemaController.update')
    Route.delete('tema/:id', 'TemaController.destroy')

    Route.get('examen', 'ExamenController.index')
    Route.post('examen', 'ExamenController.store')
    Route.put('examen/:id', 'ExamenController.update')
    Route.delete('examen/:id', 'ExamenController.destroy')
  }).middleware("auth")
);
