'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Asignatura = use("App/Models/Asignatura")
const asignaturaData = [
  {
    id: 1,
    name: 'Nomenclatura náutica',
    status: false
  },
  {
    id: 2,
    name: 'Amarre y fondeo',
    status: false
  },
  {
    id: 3,
    name: 'Seguridad en la mar',
    status: false
  },
  {
    id: 4,
    name: 'Legislación',
    status: false
  },
  {
    id: 5,
    name: 'Balizamiento',
    status: false
  },
  {
    id: 6,
    name: 'Reglamento',
    status: false
  },
  {
    id: 7,
    name: 'Maniobras en la mar',
    status: false
  },
  {
    id: 8,
    name: 'Emergencias en la mar',
    status: false
  },
  {
    id: 9,
    name: 'Meteorología',
    status: false
  },
  {
    id: 10,
    name: 'Navegación',
    status: false
  },
  {
    id: 11,
    name: 'Carta náutica',
    status: false
  }
]
class AsignaturaSeeder {
  async run () {
    for (let i in asignaturaData) {
      let asignatura = await Asignatura.findBy('id', asignaturaData[i].id)
      if (!asignatura) {
        await Asignatura.create(asignaturaData[i])
      }
    }
    console.log('Finished Asignatura')
  }
}

module.exports = AsignaturaSeeder
