const express = require('express');
const app = express();


//Welcome page
app.get('/',(req, res) => {
  res.send("<h1>Welcome to my Calculator!</h1><h2>Input these to get your results:</h2><p>/add?num1=value&num2=value</p><p>/subtract?num1=value&num2=value</p><p>/multiply?num1=value&num2=value</p><p>/divide?num1=value&num2=value</p>");
});

// Addition
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input parameters' });
  }

  const result = num1 + num2;
  res.json({ result });
});

// Subtraction
app.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input parameters' });
  }

  const result = num1 - num2;
  res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input parameters' });
  }

  const result = num1 * num2;
  res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input parameters' });
  } else if ( num2 == 0 ) {
    return res.status(400).json({ error: 'The denominator cannot be zero!' });
  }

  const result = num1 / num2;
  res.json({ result });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});