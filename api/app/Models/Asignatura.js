'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Asignatura extends Model {
    static get fillable() {
        return ['name','status']
    }
}

module.exports = Asignatura
