const data = require('../data.json')
class DataController {
  async questionnaire(req, res, next) {
    try {
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  }
  async questionnaireId({ body }, res, next) {
    try {
      let findDataById = data[body.id];
      res.send(findDataById);
    } catch (error) {
      console.log(error);
    }
  }
  async exam(req, res, next) {
    try {
      let randomQuestions = []
        for (let i = 0; i < 20; i++) {
          const randomSection = data[Math.floor(Math.random() * data.length)];
          let randomElement = randomSection.tickets[Math.floor(Math.random() * randomSection.tickets.length)];
          if (!randomQuestions.includes(randomElement)) {
            randomQuestions.push(randomElement)
          } else {
            i = i - 1;
          }   
        }
        res.send(randomQuestions);
    } catch (error) {
      console.log(error);
    }
  }
  
}

module.exports = new DataController();