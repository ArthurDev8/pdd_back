const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require('./data.json')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/questionnaire', function (req, res) {
  res.send(data);
});
app.post('/questionnaireId', function ({ body }, res) {
  let findDataById = data[body.id];
  res.send(findDataById);
});
app.get('/exam', function (req, res) {
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
});
const PORT = process.env.PORT || 3000;
http.createServer({}, app).listen(PORT);
console.log(`Server has been started on ${PORT} port.`);