const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.bergfex.pl/polska/'


var countries = []

request(url,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    const sectionRight = $('.section-right > div > div > div > ul').first()

    sectionRight.find('li').each((i,el) =>
    {
        countries.push($(el).children().attr('href'))
        
    });

    for (i = 0; i < countries.lenght;i++)
{   
    countryUrl = "https://www.bergfex.pl" + countries(i)
    console.log(countryUrl)
    
}
   
    
    console.log(countries)
    //console.log(sectionLeft.html())
    }
});

console.log(countries.length)




const url2 = 'https://www.bergfex.pl/lubawka/'

request(url2,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    const selectionLeft = $('.section-left')

    const name = $(selectionLeft).find('.less-important').eq(1)

    const selectionRight = $('.section-right')

    const openHours = $(selectionRight).find('.box-content>dd').eq(1)

    const routes = $(selectionRight).find('.dd-dense > ');
    

    //console.log(routes.text())

    }
}
)
