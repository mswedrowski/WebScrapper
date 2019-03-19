const request = require('request')
const cheerio = require('cheerio')

request('https://sportowefakty.wp.pl/',(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    const basicOtp = $('.rLeft a resort')

    console.log(html)
    }
}); 