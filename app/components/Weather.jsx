var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{                               //Initially we are not loading anything unless user make search
      isLoading: false
    }
  },
handleSearch: function(location){

  var that = this;

  this.setState({isLoading: true});          {/* Now We as we are searching make loading to true */}

  openWeatherMap.getTemp(location).then(function (temp){    {/*Using promises*/}
    that.setState({
      location: location,
      temp: temp,
      isLoading:false                         //After search gets completed make isLoding to false
    });
  }, function (errorMessage){
    that.setState({isLoading: false});       {/* Athough we get error we sholud not display fetching.. msg so make isLoding to false*/}
    alert(errorMessage);
  });
// this.setState({                             {/* Hard coding values to chk data passing*/}
  //   location: location,
  //   temp:23
//  });
},

  render:function(){
    var {isLoading,temp,location} = this.state; {/* in order to pass temp and location (which exists on this.state obj)to the WeatherMessage take them into variables*/}

    function renderMessage(){
      if (isLoading) {                                         {/*is loading */}
       return <h3 className="text-center">Fetching Weather ...</h3>;

      }else if(temp && location){        {/* if we have valid temp and location*/}
       return <WeatherMessage temp={temp} location={location}/>;
      }

    }

    return(
      <div>
        <h1 className="text-center">Get Weather </h1>
        <WeatherForm onSearch={this.handleSearch}/> {/* onSeach from weatherForm we will call a function(handleSearch) defined here (weather which is parent so name is starting from handle) */}
      {/*  <WeatherMessage temp={temp} location={location}/> Now we can pass both of variables into WeatherMessage as props , now temp prop = temp variable*/}

       {/* Now We Need Conditional loading */}
        {renderMessage()}

      </div>

    );
  }
});
module.exports = Weather;
