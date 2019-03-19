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

    const sectionLeft = $('.section-left > ')

    var areas_list = []

    const areas =  sectionLeft.find('div > ul').each((i,el) =>
    {
        $(el).find('li').each((i,elem) =>
        {
            areas_list.push($(elem).children().attr('href'))
        }
        );
    
    }
    )
    
    //console.log(areas_list)
    //console.log(sectionLeft.html())
    }
}); 


const url2 = 'https://www.bergfex.pl/lubawka/'

request(url2,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
    const $ = cheerio.load(html);

    const selectionLeft = $('.section-left')

    const name = $(selectionLeft).find('.less-important').eq(1)

    const selectionRight = $('.section-right')

    const openHours = $(selectionRight).find('box-content')
    
    console.log(name.text())

    }
}
)
