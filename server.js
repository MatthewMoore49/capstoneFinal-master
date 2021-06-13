const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
<<<<<<< HEAD
=======
//  const router = require('./routes/Attractions')
>>>>>>> ab42a60b042355e6f804f104b89cc0da03af31ae
require('dotenv').config();

const app = express();
// const http = require("http");
const PORT= process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));
const CONNECTION_URL = 'mongodb+srv://general:kableCap21@cluster0.dzt8m.mongodb.net/attractions?retryWrites=true&w=majority';

app.use(express.json());

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const attractionsRouter = require('./routes/Attractions')
const contactRouter = require('./routes/Contact')
//const NewAttractionRouter = require('./routes/NewAttraction')

app.use('/attractions', attractionsRouter)
app.use('/Contact', contactRouter)
//app.use('/NewAttraction', NewAttractionRouter)



app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);

});

<<<<<<< HEAD

=======
>>>>>>> ab42a60b042355e6f804f104b89cc0da03af31ae
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build'))
  })
}
<<<<<<< HEAD
=======

>>>>>>> ab42a60b042355e6f804f104b89cc0da03af31ae









