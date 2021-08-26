'use strict'

/*
|--------------------------------------------------------------------------
| ProvinciaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Provincia = use("App/Models/Provincia")
const ProvinciasData = [
  {
    id: 28,
    nombre: 'Madrid'
  },
  {
    id: 33,
    nombre: 'Asturias'
  },
  {
    id: 1,
    nombre: 'Pontevedra'
  },
  {
    id: 36,
    nombre: 'Vigo'
  },
  {
    id: 15,
    nombre: 'A Coruña'
  },
  {
    id: 16,
    nombre: 'Ferrol'
  },
  {
    id: 17,
    nombre: 'Santiago de Compostela'
  },
  {
    id: 27,
    nombre: 'Lugo'
  },
  {
    id: 32,
    nombre: 'Ourense'
  },
  {
    id: 2,
    nombre: 'Sevilla'
  },
  {
    id: 3,
    nombre: 'Almería'
  },
  {
    id: 4,
    nombre: 'Córdoba'
  },
  {
    id: 5,
    nombre: 'Cadiz'
  },
  {
    id: 6,
    nombre: 'Huelva'
  },
  {
    id: 7,
    nombre: 'Malaga'
  }

]

class ProvinciaSeeder {
  async run () {
    for (let i of ProvinciasData) {
      let cat = await Provincia.findBy('id', i.id)
      if (!cat) {
        await Provincia.create(i)
      }
    }
    console.log('Finished Provincias')
  }
}

module.exports = ProvinciaSeeder
