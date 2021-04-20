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
    Route.post('uploadExcel', 'UploadController.excel')
    Route.post('bigData', 'UploadController.bigData')
    Route.post('newQuest', 'QuestionController.store')
    Route.get('getQuestions', 'QuestionController.index')
    Route.get('getQuestionsbyTest/:id', 'QuestionController.getQuestionsbyTest')
    Route.get('getQuestionsbyExam/:id', 'QuestionController.getQuestionsbyExam')
    Route.put('updateQuest/:id', 'QuestionController.update')
    Route.get('questById/:id', 'QuestionController.show')
    Route.delete('destroyQuest/:id', 'QuestionController.destroy')

  })
);

addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas con protección de autenticación aquí
    Route.get("user_info", "UserController.userInfo")

    Route.get("asignatura", "AsignaturaController.index")
    Route.get('asignatura_by_id/:id', 'AsignaturaController.getAsignaturaById')
    Route.put('updateAsignatura/:id', 'AsignaturaController.update')

    Route.get('tema', 'TemaController.index')
    Route.get('test_by_course/:id', 'TestController.testByCourse')
    Route.get('testById/:id', 'TestController.testById')
    Route.post('tema', 'TemaController.store')
    Route.put('tema/:id', 'TemaController.update')
    Route.delete('tema/:id', 'TemaController.destroy')

    Route.get('examen', 'ExamenController.index')
    Route.get('ExamById/:id', 'ExamenController.examById')
    Route.post('examen', 'ExamenController.store')
    Route.put('examen/:id', 'ExamenController.update')
    Route.delete('examen/:id', 'ExamenController.destroy')
  }).middleware("auth")
);
