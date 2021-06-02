const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// const authRoutes = require('./routes/authRoutes');
// const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

// middleware
// app.use(express.static('public'));
// app.use(express.json());
// app.use(cookieParser());

// view engine
// app.set('view engine', 'ejs');

// database connection

app.use(cors());
app.use(express.json());
const dbURI = 'mongodb+srv://general:kableCap21@cluster0.dzt8m.mongodb.net/attractions?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
// app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', (req, res) => res.render('smoothies'));

// app.use(authRoutes);









const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//const exercisesRouter = require('./routes/exercises');
//const usersRouter = require('./routes/users');

//app.use('/exercises', exercisesRouter);
//app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});