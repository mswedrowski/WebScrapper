const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.bergfex.pl/polska/'


var countries = []

request(url,(error,response,html) =>
{
    if(!error && response.statusCode==200)
    {
        let $ = cheerio.load(html);

        let sectionRight = $('.section-right > div > div > div > ul').first()

    sectionRight.find('li').each((i,el) =>
    {
        var country = $(el).children().attr('href')

        countryUrl = "https://www.bergfex.pl" + country

        console.log(countryUrl)
        // for each country
        request(countryUrl,(error,response,html) =>
            {

            console.log
            let sectionLeft = $('.section-left > ')

            
            let areas =  sectionLeft.find('div > ul').each((i,el) =>
            {
                $(el).find('li').each((i,elem) =>
                {
                    //areas_list.push($(elem).children().attr('href'))
                    
                    areaUrl = "https://www.bergfex.pl" + $(elem).children().attr('href')
                    console.log(areaUrl)
                    
                }
                );
            }
            )
            }
            )
        
    });


   
    
    }
});


