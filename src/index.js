const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Hello Victor');
});

app.get('/sum', (request, response) => {
  const {number1, number2} = request.query;

  const sumResult = parseInt(number1) + parseInt(number2);

  response.send({sumResult})

});

app.get('/subtraction', (request, response) => {
  const {number1, number2} = request.query;

  const subtractionResult = parseInt(number1) - parseInt(number2);

  response.send({subtractionResult})

});

app.get('/multiplication', (request, response) => {
  const {number1, number2} = request.query;

  const multiplicationResult = parseInt(number1) * parseInt(number2);

  response.send({multiplicationResult})

});

app.get('/div', (request, response) => {
  const {number1, number2} = request.query;

  const divResult = parseInt(number1) / parseInt(number2);

  response.send({divResult})

});

app.listen(3000);