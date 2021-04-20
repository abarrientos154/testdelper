'use strict'

/*
|--------------------------------------------------------------------------
| ExamenSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Examen = use('App/Models/Examen')
const examenData = [
  {
    id: 1,
    name: 'Exámenes PER',
  },
  {
    id: 2,
    name: 'Exámenes PER Madrid',
  },
  {
    id: 3,
    name: 'Exámenes PER C. Valenciana',
  },
  {
    id: 4,
    name: 'Exámenes PER Murcia',
  },
  {
    id: 5,
    name: 'Exámenes PER Andalucía',
  },
  {
    id: 6,
    name: 'Exámenes PER Euskadi',
  },
  {
    id: 7,
    name: 'Exámenes PER Asturias',
  },
  {
    id: 8,
    name: 'Exámenes PER Baleares',
  }
]
class ExamenSeeder {
  async run () {
    for (let i in examenData) {
      let examen = await Examen.findBy('id', examenData[i].id)
      if (!examen) {
        await Examen.create(examenData[i])
      }
    }
    console.log('Finished Examen')
  }
}

module.exports = ExamenSeeder
