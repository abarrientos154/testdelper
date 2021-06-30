'use strict'
var ObjectId = require('mongodb').ObjectId;
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
    _id: new ObjectId('6079d4fd28ec030054537efe'),
    name: 'Exámenes PER',
    codigo: '01',
    licencia: 'Capitan',
    fechaT: '10/10/2021'
  },
  {
    _id: new ObjectId('6079d4fe28ec030054537eff'),
    name: 'Exámenes PER Madrid',
    codigo: '02',
    licencia: 'Capitan',
    fechaT: '10/10/2021'
  },
  {
    _id: new ObjectId('6079d4fe28ec030054537f00'),
    name: 'Exámenes PER C. Valenciana',
    codigo: '03',
    licencia: 'Capitan',
    fechaT: '10/10/2021'
  },
  {
    _id: new ObjectId('6079d4fe28ec030054537f01'),
    name: 'Exámenes PER Murcia',
    codigo: '04',
    licencia: 'Capitan',
    fechaT: '10/10/2021'
  },
  {
    _id: new ObjectId('6079d4fe28ec030054537f02'),
    name: 'Exámenes PER Andalucía',
    codigo: '05',
    licencia: 'Capitan',
    fechaT: '10/10/2021'
  },
  {
    _id: new ObjectId('6079d4fe28ec030054537f03'),
    name: 'Exámenes PER Euskadi',
    codigo: '06',
    licencia: 'Capitan',
    fechaT: '10/10/2021'
  },
  {
    _id: new ObjectId('6079d4fe28ec030054537f04'),
    name: 'Exámenes PER Asturias',
    codigo: '07',
    licencia: 'Capitan',
    fechaT: '10/10/2021'
  },
  {
    _id: new ObjectId('6079d4fe28ec030054537f05'),
    name: 'Exámenes PER Baleares',
    codigo: '08',
    licencia: 'Capitan',
    fechaT: '10/10/2021'
  }
]
class ExamenSeeder {
  async run () {
    for (let i in examenData) {
      let examen = await Examen.findBy('_id', examenData[i]._id)
      if (!examen) {
        await Examen.create(examenData[i])
      } else {
        await Examen.query().where('_id', examenData[i]._id).update(examenData[i])
      }
    }
    console.log('Finished Examen')
  }
}

module.exports = ExamenSeeder
