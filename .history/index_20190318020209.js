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
        countryUrl = "https://www.bergfex.pl" + $(el).children().attr('href')
           
        request(countryUrl,(error,response,html) =>
            {
            const sectionLeft = $('.section-left > ')

            var areas_list = []

            const areas =  sectionLeft.find('div > ul').each((i,el) =>
            {
                $(el).find('li').each((i,elem) =>
                {
                    areas_list.push($(elem).children().attr('href'))
                }
                );
                console.log(areas_list)
            }
            )
            }
            )
        
    });


   
    
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

    const openHours = $(selectionRight).find('.box-content>dd').eq(1)

    const routes = $(selectionRight).find('.dd-dense > ');
    

    //console.log(routes.text())

    }
}
)
