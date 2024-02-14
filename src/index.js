const express = require('express')
const app = express()

const { 
  sum, 
  subtraction, 
  multiplication,
  division, 
} = require("./math")

app.get('/sum', (request, response) => {
  const { number1, number2 } = request.query;

  const number1int = parseInt(number1);
  const number2int = parseInt(number2);

  const sumResult = sum(number1int, number2int)

  response.send({ sumResult });
});

app.get('/subtraction', (request, response) => {
  const { number1, number2 } = request.query;

  const number1int = parseInt(number1);
  const number2int = parseInt(number2);

  const subtractionResult = subtraction(number1int, number2int)

  response.send({ subtractionResult });
});

app.get('/multiplication', (request, response) => {
  const { number1, number2 } = request.query;

  const number1int = parseInt(number1);
  const number2int = parseInt(number2);

  const multiplicationResult = multiplication(number1int, number2int)

  response.send({ multiplicationResult });
});

app.get('/ratio', (request, response) => {
  const { number1, number2 } = request.query;
  
  const number1int = parseInt(number1);
  const number2int = parseInt(number2);

  try {
    if (number2int === 0){
      throw new Error ("Divisor can't be equal zero.")
    }
    
    const ratioResult = division(number1int, number2int)

    response.send({ ratioResult });
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
});

app.listen(3000);
