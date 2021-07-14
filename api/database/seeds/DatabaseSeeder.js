'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const GestionCost = use("App/Models/GestionCost")
class DatabaseSeeder {
  async run () {
    let gestionCost = await GestionCost.first()
    if (!gestionCost) {
      await GestionCost.create({ value : 0 })
    }
    console.log('Finished Gestion Cost')
  }
}

module.exports = DatabaseSeeder
