const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.bergfex.pl/schweiz/'

request(url,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    var list = []

    const sectionRight = $('.section-right > div > div > div > ul')

    $('.section-right > div > div > div > ul').first().each((i,el) =>
    {
       // console.log($(el).text())
        list.push($(el).text())
    });

    
    console.log(list)
    //console.log(sectionRight.html())
    }
}); 