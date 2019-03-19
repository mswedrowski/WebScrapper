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






var countries = []

request(url,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
        let $ = cheerio.load(html);

        let sectionRight = $('.section-right > div > div > div > ul').first()

    sectionRight.find('li').each((i,el) =>
    {
        var country = $(el).children().attr('href')

        countryUrl = "https://www.bergfex.pl" + country

        countries.push(countryUrl)

        //console.log(countryUrl)
        // for each country
        
        
    });


   
    
    }
});


console.log(countries)

