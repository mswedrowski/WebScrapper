const request = require('request')
const cheerio = require('cheerio')
const mongoose = require('mongoose');
const SkiArea = require('./models/skiarea')

const url = ':)'



const mongo_uri = 'mongodb+srv:// :) : :) @skiapp-mxoxw.mongodb.net/test?retryWrites=true';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});




var countries = []


function getCountry(callback)
{
    setTimeout( ()=>
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

            callback();
            
            }
        }
        
        )
        ;
   
    },10000)
}


var zones = []


function getZone(callback)
{

        for( i = 0; i < countries.length;i++)
        {

        countryUrl = countries[i]
  

        
        
        request(countryUrl,(error,response,html) =>
                {
                    

                    let $ = cheerio.load(html);
                    let sectionLeft = $('.section-left > ')

                        
                        sectionLeft.find('div > ul').each((i,el) =>
                        {
                            $(el).find('li').each((i,elem) =>
                            {
                                
                                areaUrl = ":)" + $(elem).children().attr('href')


                                zones.push(areaUrl)


                            }
                            );
                            
                        })
                }
                    )
                    
            }
            callback();
        
}


function getData()
{
    setTimeout( ()=>
    {
    
        for( i = 0; i < zones.length;i++)
        {
            areaUrl = zones[i]
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
                                            
                                            let routes = $(selectionRight).find('.dd-dense >');

                                            let easyR = routes.eq(1).text()

                                            let mediumR = routes.eq(3).text()

                                            let hardR = routes.eq(5).text()

                                            let freeR = routes.eq(7).text()
                                        
                                        var skiArea = new SkiArea(
                                            {
                                                //country: country,
                                                name: nameA,
                                                openHours:openHoursA,
                                                easyRoute:easyR,
                                                mediumRoute:mediumR,
                                                hardRoute:hardR,
                                                freeRide:freeR
                                            }
                                            )
                                            


                                        }

                                     setTimeout( ()=>
                                        {
                                        
                                    skiArea.save().then(() => {console.log('SAVED')})
                                        },3000);


                                    }
                                )
        }
    },20000)
}

getCountry(()=>{getZone(()=>{getData()})})