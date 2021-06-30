'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  static get fillable() {
    return ['email','password']
  }

  static fieldValidationRules() {
    const rulesUser = {
      email: 'required|email',
      password: 'required|string|max:256'
    }
    return rulesUser
  }

  static fieldValidationRulesUser() {
    const rulesUser = {
      email: 'required|email',
      password: 'required|string|max:256',
      full_name: 'required|string',
      num_verification: 'required|string',
      comunidadA: 'required|string',
      ciudad: 'required|string',
      direccion: 'required|string',
      codpostal: 'required|string',
      telefono: 'required|string',
      tLicencia: 'required|string',
      ciudadExamen: 'required|string',
      examenD: 'required|string',
      gestion: 'required|string',
      tasa: 'required|string',
      numberDoc: 'required|number'
    }
    return rulesUser
  }

  static get fillableUser() {
    return ['email','password', 'full_name', 'num_verification', 'comunidadA', 'ciudad',
      'direccion', 'codpostal', 'telefono', 'tLicencia', 'ciudadExamen', 'examenD',
      'gestion', 'tasa', 'numberDoc'
    ]
  }

  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
