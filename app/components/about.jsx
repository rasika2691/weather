var React = require('react');

// var About = React.createClass({
//   render:function(){
//     return(
//       <h2>About component</h2>
//     );
//   }
// });

{/* Using arrow function and stateless function components*/}

var About =(props) =>{
  return(
    <div>
      <h1>About Application:</h1>
      <h3><p>This is a weather application built on React.</p></h3>
      <p>Here ere some of the toolds I used:</p><br/>
      <ul>
        <li> <a href="https://facebook.github.io/react"> React</a> - This was the javascript framework used. </li>
        <li><a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.</li>
      </ul>
  </div>

     );
}

module.exports = About;
