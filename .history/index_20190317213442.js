const request = require('request')
const cheerio = require('cheerio')

request('https://www.skiinfo.pl',(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    const basicOtp = $('.name link-lingt')

    console.log(basicOtp.html)
    }
}); 