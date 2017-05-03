var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//
//     var {temp,location} = this.props;
//
//     return(
//     <div>
//       <h3>Its {temp} in {location}</h3><br/><br/> {/* or can b used as this.props.location and this.props.temp*/}
//     </div>
//     );
//   }
// });

{/*ES6 descructuring */}
// var WeatherMessage = (props)=> {
//   var {temp,location} = props;

{/*ES6 descructuring - advance*/}
var WeatherMessage = ({temp,location})=> {

  return(
  <div>
    <h3 class-Name="text-center">Its {temp} in {location}</h3><br/><br/> {/* or can b used as this.props.location and this.props.temp*/}
  </div>
  );
}
module.exports= WeatherMessage;
