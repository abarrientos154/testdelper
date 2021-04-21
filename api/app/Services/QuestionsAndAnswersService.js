class QuestionsAndAnswersService {
  async getAnswers (collectionAnswers, collectionQuestions) {
    const Question = use("App/Models/Question")
    for (let i in collectionQuestions) {
      let answers = []
      for (let j in collectionAnswers) {
        if (parseInt(collectionAnswers[j].test_id) === parseInt(collectionQuestions[i].test_id) && parseInt(collectionAnswers[j].question_number) === parseInt(collectionQuestions[i].question_number)) {
          answers.push(collectionAnswers[j])
        }
      } 
      collectionQuestions[i].answers = answers
      let save = await Question.create(collectionQuestions[i])
    }
    return 
  }
}
module.exports = new QuestionsAndAnswersService();
