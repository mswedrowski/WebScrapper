const request = require('request')
const cheerio = require('cheerio')
const mongoose = require('mongoose');

const url = 'https://www.bergfex.pl/polska/'



const mongo_uri = 'mongodb+srv://adm:passw0rd@skiapp-mxoxw.mongodb.net/test?retryWrites=true';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});


