const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.bergfex.pl/schweiz/'

request(url,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    const basicOtp = $('.section-right').find(div>div>div>ul)

    console.log(basicOtp.html())
    }
}); 