const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://covid19:covid19@covid19-tkcou.mongodb.net/dbcovid19?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.json());
app.use(routes);

app.listen(3333);