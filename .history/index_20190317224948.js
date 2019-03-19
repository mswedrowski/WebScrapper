const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.bergfex.pl/schweiz/'

request(url,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    const sectionRight = $('.section-right > div > div > div > ul')

    const countries = sectionRight.find('box-header')

    console.log(sectionRight.html())
    }
}); 