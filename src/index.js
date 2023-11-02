const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Hello Victor');
});

app.get('/sum', (request, response) => {
  const { number1, number2 } = request.query;

  const sumResult = parseInt(number1) + parseInt(number2);

  response.send({ sumResult });
});

app.get('/subtraction', (request, response) => {
  const { number1, number2 } = request.query;

  const subtractionResult = parseInt(number1) - parseInt(number2);

  response.send({ subtractionResult });
});

app.get('/multiplication', (request, response) => {
  const { number1, number2 } = request.query;

  const multiplicationResult = parseInt(number1) * parseInt(number2);

  response.send({ multiplicationResult });
});

app.get('/ratio', (request, response) => {
  const { number1, number2 } = request.query;
  
  const number1int = parseInt(number1);
  const number2int = parseInt(number2);

  try {
    if (number2int === 0){
      throw new Error ('Divisor não pode ser igual a zero.')
    }
    const ratioResult = number1int / number2int;
    response.send({ ratioResult });

  } catch (error) {
    response.status(400).send({ error: error.message });
  }
});

app.listen(3000);
