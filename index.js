// index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Function to find the highest alphabet
function findHighestAlphabet(alphabets) {
  if (!alphabets || alphabets.length === 0) return [];
  return [alphabets.reduce((a, b) => (a > b ? a : b))];
}

// POST method endpoint
app.post('/bfhl', (req, res) => {
  const inputData = req.body.data;

  // Extracting user_id, email, and roll_number from request
  const user_id = 'john_doe_17091999';
  const email = 'john@xyz.com';
  const roll_number = 'ABCD123';

  // Extracting numbers and alphabets from input data
  const numbers = inputData.filter((item) => !isNaN(item));
  const alphabets = inputData.filter((item) => isNaN(item));

  // Find the highest alphabet
  const highest_alphabet = findHighestAlphabet(alphabets);

  // Construct the response
  const response = {
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  };

  res.json(response);
});

// GET method endpoint
app.get('/bfhl', (req, res) => {
  // Return the hardcoded response for the GET request
  res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
