'use strict'
const Helpers = use('Helpers')
const path = require('path')
const ExcelJS = require('exceljs');
const Question = use("App/Models/Question")


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with uploads
 */
class UploadController {
  /**
   * Show a list of all uploads.
   * GET uploads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new upload.
   * GET uploads/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new upload.
   * POST uploads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single upload.
   * GET uploads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing upload.
   * GET uploads/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update upload details.
   * PUT or PATCH uploads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a upload with id.
   * DELETE uploads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
  async excel ({request, response}) {
    console.log('sirve?');
    let files = request.file('fileExcel')
    // TODO preguntar a andres
    files.clientName = 'UploadExcel.xlsx'
    const filePath = `${path.resolve(`./tmp/uploads/`)}/${files.clientName}`
    await files.move(Helpers.tmpPath('uploads'), { name: files.clientName, overwrite: true })
    console.log('filePath :>> ', filePath);

    var workbook = new ExcelJS.Workbook()
    workbook = await workbook.xlsx.readFile(filePath)
    console.log('workbook :>> ', workbook);
    let explanation = workbook.getWorksheet('Hoja1')
    // console.log('explanation :>> ', explanation);
    let colComment = explanation.getColumn('B')
    colComment.eachCell(async (cell, rowNumber) => {
      if (rowNumber >= 2) {
        let question = {}
        let title = explanation.getCell('B' + rowNumber).value
        question.title = title
        let optionA = explanation.getCell('C' + rowNumber).value
        question.optionA = optionA
        let optionB = explanation.getCell('D' + rowNumber).value
        question.optionB = optionB
        let optionC = explanation.getCell('E' + rowNumber).value
        question.optionC = optionC
        let optionD = explanation.getCell('F' + rowNumber).value
        question.optionD = optionD
        question.isActive = false
        console.log('question :>> ', question);
        let save = await Question.create(question)
      }
    })

    response.send(true)
  }
}

module.exports = UploadController
