const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.bergfex.pl/schweiz/'

request(url,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    var list = []

    const sectionRight = $('.section-right > div > div > div > ul').each((i,el) =>
    {
        list.push($(el).text())
    });

    const countries = sectionRight.find('box-header')

    console.log(list)
    }
}); 