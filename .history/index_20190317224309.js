const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.bergfex.pl/schweiz/'

request(url,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    const sectionRight = $('.section-right')

    const countries = sectionRight.children('box-content cols2')

    console.log(basicOtp.html())
    }
}); 