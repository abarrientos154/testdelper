'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Payment = use("App/Models/Payment")
const { validate } = use("Validator")
/**
 * Resourceful controller for interacting with payments
 */
class PaymentController {
  /**
   * Show a list of all payments.
   * GET payments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, params }) {
    let parametros = request.get()
    parametros.status = parseInt((request.get()).status)
    console.log(parametros, 'parametros')
    let data = (await Payment.query().where(parametros).fetch()).toJSON()
    response.send(data)
  }

  async payApprove ({ request, response, params }) {
    let data = await Payment.query().where({_id: params.id}).update({status: 2})
    response.send(data)
  }

  /**
   * Render a form to be used for creating a new payment.
   * GET payments/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new payment.
   * POST payments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let dat = request.only(Payment.fillablePayment)
    const validation = await validate(dat, Payment.fieldValidatePayment())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {
      dat.status = 1 // por procesar para el admin
      const payment = await Payment.create(dat)
      response.send(payment)
    }
  }

  async storePaypal ({ request, response }) {
    let dat = request.only(Payment.fillablePayment)
    const validation = await validate(dat, Payment.fieldValidatePayment())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {
      dat.status = 2 // procesado directo porque fue por paypal
      dat.paypal = true
      const payment = await Payment.create(dat)
      response.send(payment)
    }
  }

  /**
   * Display a single payment.
   * GET payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing payment.
   * GET payments/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update payment details.
   * PUT or PATCH payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a payment with id.
   * DELETE payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PaymentController
