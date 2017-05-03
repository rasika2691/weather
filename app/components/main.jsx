var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// var Main = React.createClass({
//   render:function(){
//     return(
//       <div>
//         <Nav/>
//         <h2> Main Component </h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props)=> {
  return(
    <div>
      <Nav/>
      <div className="container">
      <div className="col-md-8 col-md-offset-4 col-sm-12 col-lg-4">

            {props.children}  {/* Using arrow functions we need not use this. coz arrow functions refer to this attribute by default*/}

      </div>
      </div>
    </div>
  );
}
module.exports = Main;
