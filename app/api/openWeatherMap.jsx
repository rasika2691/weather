var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=81ed7404f8b5ab75d3b734c8ea2a78da&units=imperial'; {/* Getting Url from open weather map and attaching our own API key in parameter of appid*/}
//API key 81ed7404f8b5ab75d3b734c8ea2a78da

module.exports={
  getTemp:function(location){ {/*declare a function with location parameter in order to access it for async call*/}
    var encoderLocation = encodeURIComponent(location); {/* make parameter q (location) free from brower changes ie adding % sign for space etc*/}
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encoderLocation}`; {/* Add location ie q parameter at query string*/}

// Now URL is ready so use promises to call that URL
  return axios.get(requestUrl).then(function (res){
    
      if(res.data.cod && res.data.message){    {/*  Weather Map specific unusual error handling */}
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;        {/* Return success using wether data parameters chk JSON main.temp provides temperature value*/}
      }

    }, function(res){
      throw new Error(res.data.message); {/* Error Handling  */}
    });

  }
}
