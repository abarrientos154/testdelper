'use strict'
const Tema = use("App/Models/Tema")
const { validate } = use("Validator")
// const Helpers = use('Helpers')
// const mkdirp = use('mkdirp')
// const fs = require('fs')
// var randomize = require('randomatic');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with productos
 */
class TemaController {
  /**
   * Show a list of all Temas.
   * GET temas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let datos = await Tema.all()
    response.send(datos)
  }

  async TemaByAsignatura ({ request, response, params }) {
    let datos = (await Tema.query().where({asignatura_id: params.asignatura_id}).fetch()).toJSON()
    response.send(datos)
  }

  async store ({ request, response, auth }) {
    var dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    const validation = await validate(dat, Tema.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {
      let guardar = await Tema.create(dat)
      response.send(guardar)
    }
  }

  async update ({ params, request, response }) {
    var dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    const validation = await validate(dat, Tema.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {
      let modificar = await Tema.query().where('_id', params.id).update(dat)
      response.send(modificar)
    }
  }

  async destroy ({ params, request, response }) {
    let tema = await Tema.find(params.id)
    await tema.delete()
    response.send(tema)
  }
}

module.exports = TemaController
