'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Test extends Model {
  datos_asignatura () {
    return this.hasOne('App/Models/Asignatura', 'family_id', '_id')
  }
  datos_examen () {
    return this.hasOne('App/Models/Asignatura', 'family_id', '_id')
  }
}

module.exports = Test
