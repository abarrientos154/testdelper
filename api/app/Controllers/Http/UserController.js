"use strict";

const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
// const fs = require('fs')
const User = use("App/Models/User")
const GestionCost = use("App/Models/GestionCost")
const Role = use("App/Models/Role")
const { validate } = use("Validator")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  ////GESTION DE COST////
  async showGestionCost ({ response }) {
    let data = (await GestionCost.first()).toJSON()
    response.send(data)
  }

  async updateGestionCost ({ response, request }) {
    let reque = request.only(['gestion_cost'])
    console.log(reque, 'resques')
    let data = await GestionCost.first()
    data.value = parseFloat(reque.gestion_cost)
    await data.save()
    response.send(data)
  }

  /////////////////////

  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

   async registerUser({ request, response }) {
    let dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    const validation = await validate(dat, User.fieldValidationRulesUser())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else if (((await User.where({email: dat.email}).fetch()).toJSON()).length) {
      response.unprocessableEntity([{
        message: 'Correo ya registrado en el sistema!'
      }])
    } else {
      let body = dat
      body.roles = [2]
      const user = await User.create(body)

      const profilePic = request.file('perfil', {
        size: '100mb'
      })
      if (Helpers.appRoot('storage/uploads/register')) {
        await profilePic.move(Helpers.appRoot('storage/uploads/register'), {
          name: user._id.toString(),
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }
      if (!profilePic.moved()) {
        return profilePic.error()
      }

      console.log(body.numberDoc)
      for (let j = 0; j < body.numberDoc; j++) {
        console.log(j, 'kkkkkkkkkkkkk')
        const profilePic = request.file('file_' + j, {
        })
        if (Helpers.appRoot('storage/uploads/document/' + user._id.toString())) {
          await profilePic.move(Helpers.appRoot('storage/uploads/document/' + user._id.toString()), {
            name: 'file' + j + '.' + profilePic.extname,
            overwrite: true
          })
        } else {
          mkdirp.sync(`${__dirname}/storage/Excel`)
        }
        if (!profilePic.moved()) {
          return profilePic.error()
        }
      }

      response.send(user)

    }
  }

  async index({ request, response, view }) {
    let users = (await User.query().where({roles: [2]}).fetch()).toJSON()
    response.send(users)
  }

  async show({ response, params }) {
    let users = (await User.find(params.id)).toJSON()
    delete users.password
    console.log(users)
    response.send(users)
  }

  async destroy({ response, params }) {
    let users = await User.find(params.id)
    await users.delete()
    response.send(users)
  }

  async login({ auth, request }) {
    const { email, password } = request.all();
    let token = await auth.attempt(email, password)
    const user = (await User.findBy('email', email)).toJSON()
    let isUser = false
    token.roles = user.roles.map(roleMap => {
      if (roleMap === 2) {
        isUser = true
      }
      return roleMap
    })
    let userRoles = await Role.whereIn('id', token.roles).fetch()
    let permissions = userRoles.toJSON()
    token.permissions = []
    permissions.forEach(element => {
      element.permissions.forEach(element2 => {
        token.permissions.push(element2)
      })
    })

    // console.log(permissions, 'permissions')
    token.email = user.email
    token.estatus = user.estatus
    token.full_name = user.full_name ? user.full_name : null
    token.last_name = user.last_name
    token._id = user._id
    let data = {}
    data.SESSION_INFO = token
    return data
  }

  async register({ request, response }) {
    var dat = request.body

    // const validation = await validate(dat, User.fieldValidationRules())
    // if (validation.fails()) {
    //   response.unprocessableEntity(validation.messages())
    // } else {
    // }

    if (((await User.where({email: dat.email}).fetch()).toJSON()).length) {
      response.unprocessableEntity([{
        message: 'Correo ya registrado en el sistema!'
      }])
    } else {
      let body = dat
      const rol = body.roles
      body.roles = [rol]
      const user = await User.create(body)
      response.send(user)
    }
  }

  async userInfo({ request, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    response.send(user)
  }

  async update ({ params, request, response }) {
    var dat = request.body
    // const validation = await validate(dat, Asignatura.fieldValidationRules())
    // if (validation.fails()) {
    //   response.unprocessableEntity(validation.messages())
    // } else {
    // }
    var pass = dat.password
    delete dat.password
    await User.query().where('_id', params.id).update(dat)
    let user = await User.find(params.id)
    user.password = pass
    await user.save()
    response.send(user)
  }
}

module.exports = UserController;
