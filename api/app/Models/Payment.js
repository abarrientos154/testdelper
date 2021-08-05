'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Payment extends Model {

  static fieldValidatePayment() {
    const rulesUser = {
      email: 'required|email',
      name: 'required|string|max:256',
      lastName: 'required|string',
      country: 'required|string',
      address: 'string',
      comments: 'string',
      phone: 'required|string',
      cp: 'required|string',
      nieNif: 'string',
      total: 'required'
    }
    return rulesUser
  }

  static get fillablePayment() {
    return [ 'email', 'name', 'lastName', 'country', 'address', 'comments', 'phone', 'cp', 'nieNif', 'total' ]
  }

}

module.exports = Payment
