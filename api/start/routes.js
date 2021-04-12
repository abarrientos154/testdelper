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
    Route.post('uploadExcel', 'UploadController.excel')
    Route.post('newQuest', 'QuestionController.store')
    Route.get('getQuestions', 'QuestionController.index')
    Route.get('getQuestionsbyCourse', 'QuestionController.getQuestionsbyCourse')
    Route.put('updateQuest/:id', 'QuestionController.update')
    Route.get('questById/:id', 'QuestionController.show')
    Route.delete('destroyQuest/:id', 'QuestionController.destroy')

  })
);

addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas con protección de autenticación aquí
  }).middleware("auth")
);
