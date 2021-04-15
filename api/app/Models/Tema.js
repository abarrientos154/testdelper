'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tema extends Model {
  static get fillable() {
    return ['name','asignatura_id']
  }
  static fieldValidationRules() {
    const rules = {
      name: "required|string"
    }
    return rules
  }
  datos_asignatura () {
    return this.hasOne('App/Models/Asignatura', 'asignatura_id', '_id')
  }
}

module.exports = Tema
