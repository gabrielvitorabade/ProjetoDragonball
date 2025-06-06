const express = require ('express');
const validator = require('validator');
const app = express();
const {connection} = require ('./db_connection.js'); // Import the database connection
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
  
  const { email, password } = req.body;
  // console.log(email, password);
   try{
    if (!email || !password) {
        return res.status(400).json({ message: 'email and password are required' });
        }
    else {
      connection.query('SELECT * FROM users WHERE email = ? AND password = ?',[email,password], function (error, results) {
        if (error) {
          console.error('Error executing query:', error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length > 0) {
          return res.status(200).json({ message: 'Login successful!' });
        } else {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
      });
    }

      }
   catch(error) {
    console.error('Error:', error);
     res.status(400).json({ message: 'Error to require. Try again later.' });

   }
});

app.post('/register',(req,res)=>{
  const {email,password, confirmPassword} = req.body;
  
  try{
    if(!email || !password || !confirmPassword){
      return res.status(400).json({ message: 'Email and password  are required' });
    }
     else{
      connection.query('SELECT email FROM users WHERE email = ?',[email],(error,results)=>{
        if (error) {
          console.error('Error executing query:', error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length > 0) {
          return res.status(400).json({ message: 'Email already registered' });
        } else if(validator.isEmail(email) === false) {
          return res.status(400).json({ message: 'Invalid email format' });
        }else if (password !== confirmPassword){
             return res.status(400).json({message: 'Password and confirm password must be the same'});
         }
        else{connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (error, results) => {
          if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ message: 'Erro to register user, try again later.' });
          }
          return res.status(200).json({ message: 'User registered successfully!' });}
        );
      }
    })
  }
}
catch(error){
  console.error('Error:', error);
  res.status(400).json({ message: 'Error to require. Try again later.' });
}
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/characters', (req, res) => { 
  fetch('https://dragonball-api.com/api/characters?page=1&limit=12')
    .then(response => response.json())
    .then(data => {
      return res.json(data);
    })
    .catch(error => {
      console.error('Error fetching characters:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
})