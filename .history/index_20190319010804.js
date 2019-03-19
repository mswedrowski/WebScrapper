const request = require('request')
const cheerio = require('cheerio')
const mongoose = require('mongoose');

const url = 'https://www.bergfex.pl/polska/'



const mongo_uri = 'mongodb+srv://adm:passw0rd@skiapp-mxoxw.mongodb.net/test?retryWrites=true';
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

                countryUrl = "https://www.bergfex.pl" + country


                countries.push(countryUrl)
                
                
            });

            resolve();
            // getZone(countries)
            
            }
        });
    })
}


var zones = []


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
                                //areas_list.push($(elem).children().attr('href'))
                                
                                areaUrl = "https://www.bergfex.pl" + $(elem).children().attr('href')
                                
                                //console.log(areaUrl)

                                //zones.push(areaUrl)


                                request(areaUrl,(error,response,html) =>
                                {
                                    if(!error && response.statusCode==200)
                                    {
                                        let $ = cheerio.load(html);

                                        let selectionLeft = $('.section-left')

                                        let mobileBackMobileOnly = selectionLeft.find('.mobile-back mobile-only')

                                        let nameA = $('selectionLeft').find('.less-important').eq(1).text()

                                        let selectionRight = $('.section-right')

                                        let openHoursA = $(selectionRight).find('.box-content>dd').eq(1).text()

                                        let routes = $(selectionRight).find('.dd-dense > ');
                                    
                                
                                    console.log(selectionLeft.html())
                                   // console.log(openHoursA)
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


/*
function getArea(areaUrl)
{
    
    request(areaUrl,(error,response,html) =>
                                {
                                    if(!error && response.statusCode==200)
                                    {
                                        let $ = cheerio.load(html);

                                        let selectionLeft = $('.section-left')

                                        let nameA = $(selectionLeft).find('.less-important').eq(1).text()

                                        let selectionRight = $('.section-right')

                                        let openHoursA = $(selectionRight).find('.box-content>dd').eq(1).text()

                                        let routes = $(selectionRight).find('.dd-dense > ');
                                    
                                
                                    console.log(nameA)
                                    console.log(openHoursA)
                                    console.log(routes.text())

                                    }
                                }
                            )

}
*/
/*
getImage(areaUrl)
{

    request(areaUrl,(error,response,html) =>
    {
        imageUrl = areaUrl + /panorama/

        let $ = cheerio.load(html);

    }
    )

} */


//setInterval(function(){console.log(countries)},3000)

//getArea('https://www.bergfex.pl/dolomity-ski-dolina/')

function printz()
{console.log(zones)}

getCountry().then(getZone).then(printz)