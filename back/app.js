const express = require('express');
const app = express();
const {connection} = require('./db_connection.js'); // Import the database connection
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.post('/login', (req, res) => {
  
  const { name, email } = req.body;
  // console.log(name, email);
   try{
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
        }
    else {
      connection.query('SELECT * FROM users WHERE name = ? AND email = ?',[name,email], function (error, results) {
        if (error) {
          console.error('Error executing query:', error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length > 0) {
          return res.status(200).json({ message: 'Login successful!' });
        } else {
          return res.status(401).json({ message: 'Invalid name or email' });
        }
      });
    }

      }
   catch(error) {
    console.error('Error:', error);
     res.status(400).json({ message: 'Error to require. Try again later.' });

   }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// This code sets up a simple Express server that listens for POST requests on the /login endpoint.