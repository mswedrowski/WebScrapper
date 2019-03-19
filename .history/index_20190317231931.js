const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.bergfex.pl/polska/'

request(url,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    var countries = []

    const sectionRight = $('.section-right > div > div > div > ul').first()

    sectionRight.find('li').each((i,el) =>
    {
       // console.log($(el).text())
        countries.push($(el).children().attr('href'))
        
    });

    

    
    console.log(countries)
    //console.log(sectionRight.html())
    }
}); 