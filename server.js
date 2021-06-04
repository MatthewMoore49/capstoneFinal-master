const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT= process.env.PORT || 5000;
app.use('/posts', postRoutes);

app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));
const CONNECTION_URL = 'mongodb+srv://general:kableCap21@cluster0.dzt8m.mongodb.net/attractions?retryWrites=true&w=majority'

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//   .then(() => app.listen(PORT, () => console.log('Server is running on port: ${PORT}')))
//   .catch((error) => console.log(error.message));
//   mongoose.set('useFindAndModify', false);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});