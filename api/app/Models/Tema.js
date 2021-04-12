'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tema extends Model {
  static get fillable() {
    return ['name','asignatura_id']
  }
  static fieldValidationRules() {
    const rules = {
      name: "required|string",
      asignatura_id: "required|string",
    }
    return rules
  }
}

module.exports = Tema