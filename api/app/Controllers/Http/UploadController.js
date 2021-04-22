'use strict'
const ExcelJS = require('exceljs');
const Question = use("App/Models/Question")
const Test = use("App/Models/Test")
const MoveFileService = use("App/Services/MoveFileService")
const QuestionsAndAnswersService = use("App/Services/QuestionsAndAnswersService")


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
    let files = request.file('fileExcel')
    var data = request.only(['data'])
    data = JSON.parse(data.data)
    var filePath = await MoveFileService.moveFile(files)
    var workbook = new ExcelJS.Workbook()
    workbook = await workbook.xlsx.readFile(filePath)
    console.log('workbook :>> ', workbook);
    let explanation = workbook.getWorksheet('Hoja1')
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
        if (data.asignatura_id != null && data.tema_id != null) {
          question.asignatura_id = data.asignatura_id
          question.tema_id = data.tema_id
        } else if (data.examen_id != null) {
          question.examen_id = data.examen_id
        }
        let save = await Question.create(question)
      }
    })

    response.send(true)
  }
  async bigData ({ request, response }) {
    //console.log('entra en bigdata');
    if (request.file('testFile')) {
      //console.log('sirve test');
      let testFile = request.file('testFile')
      var filePath = await MoveFileService.moveFile(testFile)
      var workbook = new ExcelJS.Workbook()
      workbook = await workbook.xlsx.readFile(filePath)
      //console.log('workbook :>> ', workbook);
      var explanation = workbook.getWorksheet('Hoja1')
      var colComment = explanation.getColumn('A')
      colComment.eachCell(async (cell, rowNumber) => {
        if (rowNumber >= 2) {
          let test = {}
          let title = explanation.getCell('A' + rowNumber).value
          test.title = title
          let total_questions = explanation.getCell('B' + rowNumber).value
          test.total_questions = total_questions
          let family_id = explanation.getCell('C' + rowNumber).value
          test.family_id = family_id
          let id = explanation.getCell('D' + rowNumber).value
          test.id = id
          let save = await Test.create(test)
        }
      })
    }

    try {   
      if (request.file('questionsFile') && request.file('answersFile')) {
        // respuestas
        let answersFile = request.file('answersFile')
        var filePath = await MoveFileService.moveFile(answersFile)
        var workbook = new ExcelJS.Workbook()
        workbook = await workbook.xlsx.readFile(filePath)
        var explanation = workbook.getWorksheet('Hoja1')
        var colComment = explanation.getColumn('A')
        let collectionAnswers = []
        colComment.eachCell(async (cell, rowNumber) => {
          if (rowNumber >= 2) {
            let answer = {}
            let id = explanation.getCell('A' + rowNumber).value
            answer.id = id
            let test_id = explanation.getCell('B' + rowNumber).value
            answer.test_id = test_id
            let question_number = explanation.getCell('C' + rowNumber).value
            answer.question_number = question_number
            let answer_number = explanation.getCell('D' + rowNumber).value
            answer.answer_number = answer_number
            let titleAnswer = explanation.getCell('E' + rowNumber).value
            answer.titleAnswer = titleAnswer
            collectionAnswers.push(answer)
          }
        })
        // preguntas
        let questionsFile = request.file('questionsFile')
        filePath = await MoveFileService.moveFile(questionsFile)
        var workbook = new ExcelJS.Workbook()
        workbook = await workbook.xlsx.readFile(filePath)
        console.log('workbook :>> ', workbook);
        var explanation = workbook.getWorksheet('Hoja1')
        var colComment = explanation.getColumn('A')
        let collectionQuestions = []
        colComment.eachCell(async (cell, rowNumber) => {
          if (rowNumber >= 2) {
            let quest = {}
            let id = explanation.getCell('A' + rowNumber).value
            quest.id = id
            let test_id = explanation.getCell('B' + rowNumber).value
            quest.test_id = test_id
            let question_number = explanation.getCell('C' + rowNumber).value
            quest.question_number = question_number
            let question = explanation.getCell('D' + rowNumber).value
            quest.question = question
            let correct_answer = explanation.getCell('E' + rowNumber).value
            quest.correct_answer = correct_answer
            collectionQuestions.push(quest)
          }
        })
        let service = await QuestionsAndAnswersService.getAnswers(collectionAnswers, collectionQuestions)
        console.log('collectionAnswers.length, collectionQuestions.length :>> ', collectionAnswers.length, collectionQuestions.length);
      }
    } catch (error) {
      console.error(error.name + '2: ' + error.message)
    }
    response.send(true)
  }
}

module.exports = UploadController
