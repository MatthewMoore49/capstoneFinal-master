const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
// const http = require("http");
const PORT= process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));
const CONNECTION_URL = process.env.ATLAS_URI;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const attractionsRouter = require('./routes/Attractions')
const contactRouter = require('./routes/Contact')

app.use('/attractions', attractionsRouter)
app.use('/Contact', contactRouter)




if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}



app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);

});






