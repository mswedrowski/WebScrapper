const request = require('request')
const cheerio = require('cheerio')
const mongoose = require('mongoose');

const url = ':)'



const mongo_uri = 'mongodb+srv:// :)';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});




var countries = []

function getCountry()
{
    return new Promise((resolve,reject) =>
    {
        request(url,(error,response,html) =>
        {
            if(!error && response.statusCode==200)
            {
                let $ = cheerio.load(html);

                let sectionRight = $('.section-right > div > div > div > ul').first()

            sectionRight.find('li').each((i,el) =>
            {
                var country = $(el).children().attr('href')

                countryUrl = ":)" + country


                countries.push(countryUrl)
                
                
            });

            resolve();
            
            }
        });
    })
}




function getZone()
{
    return new Promise((resolve,reject) =>
        {

        for( i = 0; i < countries.length;i++)
        {

        country = countries[i]

        countryUrl = country    

        
        
        request(countryUrl,(error,response,html) =>
                {
                    

                    let $ = cheerio.load(html);
                    let sectionLeft = $('.section-left > ')

                        
                        let areas =  sectionLeft.find('div > ul').each((i,el) =>
                        {
                            $(el).find('li').each((i,elem) =>
                            {
                                areaUrl = ":)" + $(elem).children().attr('href')



                                request(areaUrl,(error,response,html) =>
                                {
                                    if(!error && response.statusCode==200)
                                    {
                                        let $ = cheerio.load(html);

                                        let selectionLeft = $('.section-left')

                                        let selectionLeftH = selectionLeft.find(' > header > h1')

                                        let mobileBackMobileOnly = selectionLeftH.find('.mobile-back mobile-only')

                                        let nameA = selectionLeft.find(' > header > h1').text()

                                        let selectionRight = $('.section-right')

                                        let openHoursA = $(selectionRight).find('.box-content>dd').eq(1).text()

                                        let routes = $(selectionRight).find('.dd-dense > ');
                                    
                                
                                    //console.log(selectionLeftH.text())
                                    //console.log(openHoursA)
                                    //console.log(routes.text())

                                    }
                                }
                            )


                            }
                            );
                            
                        })
                }
                    )
                    
            }
           
              })
        
}


getCountry().then(getZone)