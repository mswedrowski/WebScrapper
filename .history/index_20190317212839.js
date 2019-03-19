const request = require('request')
const cheerio = require('cheerio')

request('https://www.skiinfo.pl',(error,response,html) =>
{
    if(!error && response.status==200)
    {
        console.log(html)
    }
}); 